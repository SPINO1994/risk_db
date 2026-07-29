package az.risk.registry.repository;

import az.risk.registry.entity.Consequence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsequenceRepository extends JpaRepository<Consequence, Long> {
    List<Consequence> findByNameContainingIgnoreCase(String name);
}
