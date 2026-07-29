package az.risk.registry.repository;

import az.risk.registry.entity.RiskRegister;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RiskRegisterRepository extends JpaRepository<RiskRegister, Long> {
    List<RiskRegister> findByNameContainingIgnoreCase(String name);
}
