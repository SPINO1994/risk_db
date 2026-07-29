package az.risk.registry.controller;

import az.risk.registry.entity.RaciMatrix;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.RaciMatrixService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/raci-matrices")
public class RaciMatrixController extends AbstractCrudController<RaciMatrix, Long> {

    private final RaciMatrixService raciMatrixService;

    public RaciMatrixController(RaciMatrixService raciMatrixService) {
        this.raciMatrixService = raciMatrixService;
    }

    @Override
    protected CrudService<RaciMatrix, Long> getService() {
        return raciMatrixService;
    }
}
