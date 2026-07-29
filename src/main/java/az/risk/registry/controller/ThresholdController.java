package az.risk.registry.controller;

import az.risk.registry.entity.Threshold;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.ThresholdService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/thresholds")
public class ThresholdController extends AbstractCrudController<Threshold, Long> {

    private final ThresholdService thresholdService;

    public ThresholdController(ThresholdService thresholdService) {
        this.thresholdService = thresholdService;
    }

    @Override
    protected CrudService<Threshold, Long> getService() {
        return thresholdService;
    }
}
