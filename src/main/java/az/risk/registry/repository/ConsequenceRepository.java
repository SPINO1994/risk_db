package az.risk.registry.repository;

import az.risk.registry.entity.Consequence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsequenceRepository extends JpaRepository<Consequence, Long> {
}
