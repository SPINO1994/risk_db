package az.risk.registry.service;

import az.risk.registry.entity.Incident;
import az.risk.registry.repository.IncidentRepository;
import az.risk.registry.repository.RiskRegisterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidentService extends AbstractCrudService<Incident, Long> {

    private final IncidentRepository incidentRepository;
    private final RiskRegisterRepository riskRegisterRepository;

    public IncidentService(IncidentRepository incidentRepository,
                           RiskRegisterRepository riskRegisterRepository) {
        this.incidentRepository = incidentRepository;
        this.riskRegisterRepository = riskRegisterRepository;
    }

    @Override
    protected IncidentRepository getRepository() {
        return incidentRepository;
    }

    @Override
    protected String getResourceName() {
        return "Incident";
    }

    @Override
    public List<Incident> search(String query) {
        List<Incident> items = incidentRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Incident incident) {
        if (incident.getRelatedRiskId() != null) {
            try {
                Long id = Long.parseLong(incident.getRelatedRiskId().trim());
                riskRegisterRepository.findById(id).ifPresent(r -> incident.setRelatedRiskName(r.getName()));
            } catch (Exception ignored) {}
        }
    }
}
