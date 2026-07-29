package az.risk.registry.repository;

import az.risk.registry.entity.RiskRegister;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RiskRegisterRepository extends JpaRepository<RiskRegister, Long> {
}
