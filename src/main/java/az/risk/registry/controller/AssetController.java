package az.risk.registry.controller;

import az.risk.registry.entity.Asset;
import az.risk.registry.service.AssetService;
import az.risk.registry.service.CrudService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/assets")
public class AssetController extends AbstractCrudController<Asset, Long> {

    private final AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @Override
    protected CrudService<Asset, Long> getService() {
        return assetService;
    }
}
