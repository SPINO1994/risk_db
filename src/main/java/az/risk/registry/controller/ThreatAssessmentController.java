package az.risk.registry.controller;

import az.risk.registry.entity.ThreatAssessment;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.ThreatAssessmentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/threat-assessments")
public class ThreatAssessmentController extends AbstractCrudController<ThreatAssessment, Long> {

    private final ThreatAssessmentService threatAssessmentService;

    public ThreatAssessmentController(ThreatAssessmentService threatAssessmentService) {
        this.threatAssessmentService = threatAssessmentService;
    }

    @Override
    protected CrudService<ThreatAssessment, Long> getService() {
        return threatAssessmentService;
    }
}
