package az.risk.registry.controller;

import az.risk.registry.entity.Incident;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.IncidentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController extends AbstractCrudController<Incident, Long> {

    private final IncidentService incidentService;

    public IncidentController(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @Override
    protected CrudService<Incident, Long> getService() {
        return incidentService;
    }
}
