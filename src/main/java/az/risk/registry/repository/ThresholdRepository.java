package az.risk.registry.repository;

import az.risk.registry.entity.Threshold;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThresholdRepository extends JpaRepository<Threshold, Long> {
}
