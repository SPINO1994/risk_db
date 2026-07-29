package az.risk.registry.service;

import az.risk.registry.entity.Discrepancy;
import az.risk.registry.repository.AssetRepository;
import az.risk.registry.repository.DiscrepancyRepository;
import az.risk.registry.repository.RequirementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscrepancyService extends AbstractCrudService<Discrepancy, Long> {

    private final DiscrepancyRepository discrepancyRepository;
    private final RequirementRepository requirementRepository;
    private final AssetRepository assetRepository;

    public DiscrepancyService(DiscrepancyRepository discrepancyRepository,
                              RequirementRepository requirementRepository,
                              AssetRepository assetRepository) {
        this.discrepancyRepository = discrepancyRepository;
        this.requirementRepository = requirementRepository;
        this.assetRepository = assetRepository;
    }

    @Override
    protected DiscrepancyRepository getRepository() {
        return discrepancyRepository;
    }

    @Override
    protected String getResourceName() {
        return "Discrepancy";
    }

    @Override
    public List<Discrepancy> search(String query) {
        List<Discrepancy> items = discrepancyRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Discrepancy discrepancy) {
        if (discrepancy.getViolatedRequirementId() != null) {
            try {
                Long id = Long.parseLong(discrepancy.getViolatedRequirementId().trim());
                requirementRepository.findById(id).ifPresent(r -> discrepancy.setViolatedRequirementName(r.getName()));
            } catch (Exception ignored) {}
        }
        if (discrepancy.getAssetId() != null) {
            try {
                Long id = Long.parseLong(discrepancy.getAssetId().trim());
                assetRepository.findById(id).ifPresent(a -> discrepancy.setAssetName(a.getName()));
            } catch (Exception ignored) {}
        }
    }
}
