package az.risk.registry.service;

import az.risk.registry.entity.ThreatAssessment;
import az.risk.registry.repository.ThreatAssessmentRepository;
import org.springframework.stereotype.Service;

@Service
public class ThreatAssessmentService extends AbstractCrudService<ThreatAssessment, Long> {

    private final ThreatAssessmentRepository threatAssessmentRepository;

    public ThreatAssessmentService(ThreatAssessmentRepository threatAssessmentRepository) {
        this.threatAssessmentRepository = threatAssessmentRepository;
    }

    @Override
    protected ThreatAssessmentRepository getRepository() {
        return threatAssessmentRepository;
    }

    @Override
    protected String getResourceName() {
        return "ThreatAssessment";
    }
}
