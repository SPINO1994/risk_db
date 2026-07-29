package az.risk.registry.service;

import az.risk.registry.entity.Consequence;
import az.risk.registry.repository.ConsequenceRepository;
import org.springframework.stereotype.Service;

@Service
public class ConsequenceService extends AbstractCrudService<Consequence, Long> {

    private final ConsequenceRepository consequenceRepository;

    public ConsequenceService(ConsequenceRepository consequenceRepository) {
        this.consequenceRepository = consequenceRepository;
    }

    @Override
    protected ConsequenceRepository getRepository() {
        return consequenceRepository;
    }

    @Override
    protected String getResourceName() {
        return "Consequence";
    }
}
