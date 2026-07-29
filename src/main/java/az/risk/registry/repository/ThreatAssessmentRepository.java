package az.risk.registry.repository;

import az.risk.registry.entity.ThreatAssessment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThreatAssessmentRepository extends JpaRepository<ThreatAssessment, Long> {
}
