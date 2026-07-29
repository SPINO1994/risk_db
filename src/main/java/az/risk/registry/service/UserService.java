package az.risk.registry.service;

import az.risk.registry.entity.User;
import az.risk.registry.entity.UserRole;
import az.risk.registry.exception.ResourceNotFoundException;
import az.risk.registry.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("İstifadəçi tapılmadı: " + id));
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("İstifadəçi tapılmadı: " + username));
    }

    public User createUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Bu istifadəçi adı artıq mövcuddur: " + user.getUsername());
        }
        if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
            throw new IllegalArgumentException("Parol boş ola bilməz");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getRole() == null) {
            user.setRole(UserRole.USER);
        }
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        User existing = findById(id);

        // Check if demoting or disabling the last admin
        if (existing.getRole() == UserRole.ADMIN && (updatedUser.getRole() == UserRole.USER || !updatedUser.isEnabled())) {
            long adminCount = userRepository.countByRoleAndEnabledTrue(UserRole.ADMIN);
            if (adminCount <= 1) {
                throw new IllegalArgumentException("Sonuncu Admin istifadəçisini deaktiv etmək və ya rolu dəyişmək olmaz!");
            }
        }

        existing.setFullName(updatedUser.getFullName());
        existing.setRole(updatedUser.getRole());
        existing.setEnabled(updatedUser.isEnabled());

        // Optional password update
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().trim().isEmpty()) {
            existing.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        return userRepository.save(existing);
    }

    public void deleteUser(Long id) {
        User existing = findById(id);
        if (existing.getRole() == UserRole.ADMIN) {
            long adminCount = userRepository.countByRoleAndEnabledTrue(UserRole.ADMIN);
            if (adminCount <= 1) {
                throw new IllegalArgumentException("Sonuncu Admin istifadəçisini silmək olmaz!");
            }
        }
        userRepository.deleteById(id);
    }

    public void changePassword(String username, String oldPassword, String newPassword) {
        User user = findByUsername(username);
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new IllegalArgumentException("Cari parol yanlışdır!");
        }
        if (newPassword == null || newPassword.trim().length() < 6) {
            throw new IllegalArgumentException("Yeni parol ən azı 6 simvol olmalıdır!");
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }
}
