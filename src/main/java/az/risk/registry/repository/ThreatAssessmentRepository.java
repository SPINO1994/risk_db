package az.risk.registry.repository;

import az.risk.registry.entity.ThreatAssessment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThreatAssessmentRepository extends JpaRepository<ThreatAssessment, Long> {
    List<ThreatAssessment> findByPotentialEventContainingIgnoreCase(String potentialEvent);
}
