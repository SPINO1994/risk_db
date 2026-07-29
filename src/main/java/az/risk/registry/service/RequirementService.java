package az.risk.registry.service;

import az.risk.registry.entity.Requirement;
import az.risk.registry.repository.RequirementRepository;
import org.springframework.stereotype.Service;

@Service
public class RequirementService extends AbstractCrudService<Requirement, Long> {

    private final RequirementRepository requirementRepository;

    public RequirementService(RequirementRepository requirementRepository) {
        this.requirementRepository = requirementRepository;
    }

    @Override
    protected RequirementRepository getRepository() {
        return requirementRepository;
    }

    @Override
    protected String getResourceName() {
        return "Requirement";
    }
}
