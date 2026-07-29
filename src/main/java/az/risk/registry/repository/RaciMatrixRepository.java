package az.risk.registry.repository;

import az.risk.registry.entity.RaciMatrix;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RaciMatrixRepository extends JpaRepository<RaciMatrix, Long> {
}
