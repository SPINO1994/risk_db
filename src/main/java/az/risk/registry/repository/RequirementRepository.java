package az.risk.registry.repository;

import az.risk.registry.entity.Requirement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequirementRepository extends JpaRepository<Requirement, Long> {
    List<Requirement> findByNameContainingIgnoreCase(String name);
}
