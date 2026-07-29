package az.risk.registry.repository;

import az.risk.registry.entity.Discrepancy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscrepancyRepository extends JpaRepository<Discrepancy, Long> {
}
