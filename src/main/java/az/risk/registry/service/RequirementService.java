package az.risk.registry.service;

import az.risk.registry.entity.Requirement;
import az.risk.registry.repository.RequirementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<Requirement> search(String query) {
        List<Requirement> items = requirementRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }
}
