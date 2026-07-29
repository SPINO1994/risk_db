package az.risk.registry.controller;

import az.risk.registry.entity.RiskRegister;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.RiskRegisterService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/risks")
public class RiskRegisterController extends AbstractCrudController<RiskRegister, Long> {

    private final RiskRegisterService riskRegisterService;

    public RiskRegisterController(RiskRegisterService riskRegisterService) {
        this.riskRegisterService = riskRegisterService;
    }

    @Override
    protected CrudService<RiskRegister, Long> getService() {
        return riskRegisterService;
    }
}
