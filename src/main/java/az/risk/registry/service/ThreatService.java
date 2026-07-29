package az.risk.registry.service;

import az.risk.registry.entity.Threat;
import az.risk.registry.repository.ThreatRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<Threat> search(String query) {
        List<Threat> items = threatRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }
}
