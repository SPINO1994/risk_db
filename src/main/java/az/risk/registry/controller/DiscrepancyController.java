package az.risk.registry.controller;

import az.risk.registry.entity.Discrepancy;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.DiscrepancyService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/discrepancies")
public class DiscrepancyController extends AbstractCrudController<Discrepancy, Long> {

    private final DiscrepancyService discrepancyService;

    public DiscrepancyController(DiscrepancyService discrepancyService) {
        this.discrepancyService = discrepancyService;
    }

    @Override
    protected CrudService<Discrepancy, Long> getService() {
        return discrepancyService;
    }
}
