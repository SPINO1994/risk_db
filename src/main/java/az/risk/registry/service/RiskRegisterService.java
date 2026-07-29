package az.risk.registry.service;

import az.risk.registry.entity.RiskRegister;
import az.risk.registry.repository.RiskRegisterRepository;
import org.springframework.stereotype.Service;

@Service
public class RiskRegisterService extends AbstractCrudService<RiskRegister, Long> {

    private final RiskRegisterRepository riskRegisterRepository;

    public RiskRegisterService(RiskRegisterRepository riskRegisterRepository) {
        this.riskRegisterRepository = riskRegisterRepository;
    }

    @Override
    protected RiskRegisterRepository getRepository() {
        return riskRegisterRepository;
    }

    @Override
    protected String getResourceName() {
        return "RiskRegister";
    }
}
