package az.risk.registry.service;

import az.risk.registry.entity.Solution;
import az.risk.registry.repository.SolutionRepository;
import org.springframework.stereotype.Service;

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
}
