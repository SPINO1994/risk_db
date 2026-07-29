package az.risk.registry.service;

import az.risk.registry.entity.Asset;
import az.risk.registry.repository.AssetRepository;
import org.springframework.stereotype.Service;

@Service
public class AssetService extends AbstractCrudService<Asset, Long> {

    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    @Override
    protected AssetRepository getRepository() {
        return assetRepository;
    }

    @Override
    protected String getResourceName() {
        return "Asset";
    }
}
