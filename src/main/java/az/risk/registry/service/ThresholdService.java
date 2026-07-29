package az.risk.registry.service;

import az.risk.registry.entity.Threshold;
import az.risk.registry.repository.AssetRepository;
import az.risk.registry.repository.ThresholdRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThresholdService extends AbstractCrudService<Threshold, Long> {

    private final ThresholdRepository thresholdRepository;
    private final AssetRepository assetRepository;

    public ThresholdService(ThresholdRepository thresholdRepository, AssetRepository assetRepository) {
        this.thresholdRepository = thresholdRepository;
        this.assetRepository = assetRepository;
    }

    @Override
    protected ThresholdRepository getRepository() {
        return thresholdRepository;
    }

    @Override
    protected String getResourceName() {
        return "Threshold";
    }

    @Override
    public List<Threshold> search(String query) {
        List<Threshold> items = thresholdRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Threshold threshold) {
        if (threshold.getAssetId() != null) {
            try {
                Long id = Long.parseLong(threshold.getAssetId().trim());
                assetRepository.findById(id).ifPresent(a -> threshold.setAssetName(a.getName()));
            } catch (Exception ignored) {}
        }
    }
}
