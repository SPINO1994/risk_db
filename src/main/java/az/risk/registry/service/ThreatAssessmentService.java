package az.risk.registry.service;

import az.risk.registry.entity.ThreatAssessment;
import az.risk.registry.repository.AssetRepository;
import az.risk.registry.repository.DiscrepancyRepository;
import az.risk.registry.repository.ThreatAssessmentRepository;
import az.risk.registry.repository.ThreatRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThreatAssessmentService extends AbstractCrudService<ThreatAssessment, Long> {

    private final ThreatAssessmentRepository threatAssessmentRepository;
    private final ThreatRepository threatRepository;
    private final AssetRepository assetRepository;
    private final DiscrepancyRepository discrepancyRepository;

    public ThreatAssessmentService(ThreatAssessmentRepository threatAssessmentRepository,
                                   ThreatRepository threatRepository,
                                   AssetRepository assetRepository,
                                   DiscrepancyRepository discrepancyRepository) {
        this.threatAssessmentRepository = threatAssessmentRepository;
        this.threatRepository = threatRepository;
        this.assetRepository = assetRepository;
        this.discrepancyRepository = discrepancyRepository;
    }

    @Override
    protected ThreatAssessmentRepository getRepository() {
        return threatAssessmentRepository;
    }

    @Override
    protected String getResourceName() {
        return "ThreatAssessment";
    }

    @Override
    public List<ThreatAssessment> search(String query) {
        List<ThreatAssessment> items = threatAssessmentRepository.findByPotentialEventContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(ThreatAssessment assessment) {
        if (assessment.getThreatId() != null) {
            try {
                Long id = Long.parseLong(assessment.getThreatId().trim());
                threatRepository.findById(id).ifPresent(t -> assessment.setThreatName(t.getName()));
            } catch (Exception ignored) {}
        }
        if (assessment.getAssetId() != null) {
            try {
                Long id = Long.parseLong(assessment.getAssetId().trim());
                assetRepository.findById(id).ifPresent(a -> assessment.setAssetName(a.getName()));
            } catch (Exception ignored) {}
        }
        if (assessment.getDiscrepancyId() != null) {
            try {
                Long id = Long.parseLong(assessment.getDiscrepancyId().trim());
                discrepancyRepository.findById(id).ifPresent(d -> assessment.setDiscrepancyName(d.getName()));
            } catch (Exception ignored) {}
        }
    }
}
