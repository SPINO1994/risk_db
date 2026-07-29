package az.risk.registry.repository;

import az.risk.registry.entity.User;
import az.risk.registry.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    long countByRoleAndEnabledTrue(UserRole role);
    boolean existsByUsername(String username);
}
