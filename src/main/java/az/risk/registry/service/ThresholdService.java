package az.risk.registry.service;

import az.risk.registry.entity.Threshold;
import az.risk.registry.repository.ThresholdRepository;
import org.springframework.stereotype.Service;

@Service
public class ThresholdService extends AbstractCrudService<Threshold, Long> {

    private final ThresholdRepository thresholdRepository;

    public ThresholdService(ThresholdRepository thresholdRepository) {
        this.thresholdRepository = thresholdRepository;
    }

    @Override
    protected ThresholdRepository getRepository() {
        return thresholdRepository;
    }

    @Override
    protected String getResourceName() {
        return "Threshold";
    }
}
