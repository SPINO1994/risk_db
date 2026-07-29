package az.risk.registry.service;

import az.risk.registry.entity.Discrepancy;
import az.risk.registry.repository.DiscrepancyRepository;
import org.springframework.stereotype.Service;

@Service
public class DiscrepancyService extends AbstractCrudService<Discrepancy, Long> {

    private final DiscrepancyRepository discrepancyRepository;

    public DiscrepancyService(DiscrepancyRepository discrepancyRepository) {
        this.discrepancyRepository = discrepancyRepository;
    }

    @Override
    protected DiscrepancyRepository getRepository() {
        return discrepancyRepository;
    }

    @Override
    protected String getResourceName() {
        return "Discrepancy";
    }
}
