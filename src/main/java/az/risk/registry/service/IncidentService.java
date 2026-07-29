package az.risk.registry.service;

import az.risk.registry.entity.Incident;
import az.risk.registry.repository.IncidentRepository;
import org.springframework.stereotype.Service;

@Service
public class IncidentService extends AbstractCrudService<Incident, Long> {

    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    @Override
    protected IncidentRepository getRepository() {
        return incidentRepository;
    }

    @Override
    protected String getResourceName() {
        return "Incident";
    }
}
