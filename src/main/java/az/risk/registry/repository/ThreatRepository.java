package az.risk.registry.repository;

import az.risk.registry.entity.Threat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThreatRepository extends JpaRepository<Threat, Long> {
}
