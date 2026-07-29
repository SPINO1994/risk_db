package az.risk.registry.controller;

import az.risk.registry.entity.Consequence;
import az.risk.registry.service.ConsequenceService;
import az.risk.registry.service.CrudService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consequences")
public class ConsequenceController extends AbstractCrudController<Consequence, Long> {

    private final ConsequenceService consequenceService;

    public ConsequenceController(ConsequenceService consequenceService) {
        this.consequenceService = consequenceService;
    }

    @Override
    protected CrudService<Consequence, Long> getService() {
        return consequenceService;
    }
}
