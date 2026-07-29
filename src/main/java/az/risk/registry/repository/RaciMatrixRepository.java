package az.risk.registry.repository;

import az.risk.registry.entity.RaciMatrix;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RaciMatrixRepository extends JpaRepository<RaciMatrix, Long> {
    List<RaciMatrix> findByActivityNameContainingIgnoreCase(String activityName);
}
