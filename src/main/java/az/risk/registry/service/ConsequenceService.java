package az.risk.registry.service;

import az.risk.registry.entity.Consequence;
import az.risk.registry.repository.AssetRepository;
import az.risk.registry.repository.ConsequenceRepository;
import az.risk.registry.repository.ThreatAssessmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsequenceService extends AbstractCrudService<Consequence, Long> {

    private final ConsequenceRepository consequenceRepository;
    private final ThreatAssessmentRepository threatAssessmentRepository;
    private final AssetRepository assetRepository;

    public ConsequenceService(ConsequenceRepository consequenceRepository,
                              ThreatAssessmentRepository threatAssessmentRepository,
                              AssetRepository assetRepository) {
        this.consequenceRepository = consequenceRepository;
        this.threatAssessmentRepository = threatAssessmentRepository;
        this.assetRepository = assetRepository;
    }

    @Override
    protected ConsequenceRepository getRepository() {
        return consequenceRepository;
    }

    @Override
    protected String getResourceName() {
        return "Consequence";
    }

    @Override
    public List<Consequence> search(String query) {
        List<Consequence> items = consequenceRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Consequence consequence) {
        if (consequence.getThreatScenarioId() != null) {
            try {
                Long id = Long.parseLong(consequence.getThreatScenarioId().trim());
                threatAssessmentRepository.findById(id).ifPresent(ta -> consequence.setThreatScenarioName(ta.getPotentialEvent()));
            } catch (Exception ignored) {}
        }
        if (consequence.getAssetId() != null) {
            try {
                Long id = Long.parseLong(consequence.getAssetId().trim());
                assetRepository.findById(id).ifPresent(a -> consequence.setAssetName(a.getName()));
            } catch (Exception ignored) {}
        }
    }
}
