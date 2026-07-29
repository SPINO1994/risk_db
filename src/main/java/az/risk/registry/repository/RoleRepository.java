package az.risk.registry.repository;

import az.risk.registry.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role> findByNameContainingIgnoreCase(String name);
}
