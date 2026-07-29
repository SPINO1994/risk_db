package az.risk.registry.repository;

import az.risk.registry.entity.Solution;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SolutionRepository extends JpaRepository<Solution, Long> {
    List<Solution> findByNameContainingIgnoreCase(String name);
}
