package az.risk.registry.controller;

import az.risk.registry.entity.Threat;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.ThreatService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/threats")
public class ThreatController extends AbstractCrudController<Threat, Long> {

    private final ThreatService threatService;

    public ThreatController(ThreatService threatService) {
        this.threatService = threatService;
    }

    @Override
    protected CrudService<Threat, Long> getService() {
        return threatService;
    }
}
