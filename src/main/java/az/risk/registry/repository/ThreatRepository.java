package az.risk.registry.repository;

import az.risk.registry.entity.Threat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThreatRepository extends JpaRepository<Threat, Long> {
    List<Threat> findByNameContainingIgnoreCase(String name);
}
