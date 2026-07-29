package az.risk.registry.service;

import az.risk.registry.entity.Asset;
import az.risk.registry.repository.AssetRepository;
import az.risk.registry.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService extends AbstractCrudService<Asset, Long> {

    private final AssetRepository assetRepository;
    private final EmployeeRepository employeeRepository;

    public AssetService(AssetRepository assetRepository, EmployeeRepository employeeRepository) {
        this.assetRepository = assetRepository;
        this.employeeRepository = employeeRepository;
    }

    @Override
    protected AssetRepository getRepository() {
        return assetRepository;
    }

    @Override
    protected String getResourceName() {
        return "Asset";
    }

    @Override
    public List<Asset> search(String query) {
        List<Asset> items = assetRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Asset asset) {
        if (asset.getOwnerWorkerId() != null) {
            try {
                Long id = Long.parseLong(asset.getOwnerWorkerId().trim());
                employeeRepository.findById(id).ifPresent(e -> asset.setOwnerWorkerName(e.getFullName()));
            } catch (Exception ignored) {}
        }
        if (asset.getResponsibleWorkerId() != null) {
            try {
                Long id = Long.parseLong(asset.getResponsibleWorkerId().trim());
                employeeRepository.findById(id).ifPresent(e -> asset.setResponsibleWorkerName(e.getFullName()));
            } catch (Exception ignored) {}
        }
    }
}
