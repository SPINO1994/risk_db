package az.risk.registry.repository;

import az.risk.registry.entity.Discrepancy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiscrepancyRepository extends JpaRepository<Discrepancy, Long> {
    List<Discrepancy> findByNameContainingIgnoreCase(String name);
}
