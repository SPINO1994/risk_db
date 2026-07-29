package az.risk.registry.service;

import az.risk.registry.entity.Solution;
import az.risk.registry.repository.SolutionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolutionService extends AbstractCrudService<Solution, Long> {

    private final SolutionRepository solutionRepository;

    public SolutionService(SolutionRepository solutionRepository) {
        this.solutionRepository = solutionRepository;
    }

    @Override
    protected SolutionRepository getRepository() {
        return solutionRepository;
    }

    @Override
    protected String getResourceName() {
        return "Solution";
    }

    @Override
    public List<Solution> search(String query) {
        List<Solution> items = solutionRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }
}
