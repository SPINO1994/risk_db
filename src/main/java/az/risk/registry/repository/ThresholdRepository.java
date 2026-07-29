package az.risk.registry.repository;

import az.risk.registry.entity.Threshold;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThresholdRepository extends JpaRepository<Threshold, Long> {
    List<Threshold> findByNameContainingIgnoreCase(String name);
}
