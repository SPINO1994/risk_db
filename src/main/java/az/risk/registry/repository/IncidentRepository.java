package az.risk.registry.repository;

import az.risk.registry.entity.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
    List<Incident> findByNameContainingIgnoreCase(String name);
}
