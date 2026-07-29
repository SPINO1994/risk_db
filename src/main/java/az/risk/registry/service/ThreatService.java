package az.risk.registry.service;

import az.risk.registry.entity.Threat;
import az.risk.registry.repository.ThreatRepository;
import org.springframework.stereotype.Service;

@Service
public class ThreatService extends AbstractCrudService<Threat, Long> {

    private final ThreatRepository threatRepository;

    public ThreatService(ThreatRepository threatRepository) {
        this.threatRepository = threatRepository;
    }

    @Override
    protected ThreatRepository getRepository() {
        return threatRepository;
    }

    @Override
    protected String getResourceName() {
        return "Threat";
    }
}
