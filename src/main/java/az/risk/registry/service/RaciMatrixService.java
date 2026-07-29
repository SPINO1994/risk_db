package az.risk.registry.service;

import az.risk.registry.entity.RaciMatrix;
import az.risk.registry.repository.RaciMatrixRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RaciMatrixService extends AbstractCrudService<RaciMatrix, Long> {

    private final RaciMatrixRepository raciMatrixRepository;

    public RaciMatrixService(RaciMatrixRepository raciMatrixRepository) {
        this.raciMatrixRepository = raciMatrixRepository;
    }

    @Override
    protected RaciMatrixRepository getRepository() {
        return raciMatrixRepository;
    }

    @Override
    protected String getResourceName() {
        return "RaciMatrix";
    }

    @Override
    public List<RaciMatrix> search(String query) {
        List<RaciMatrix> items = raciMatrixRepository.findByActivityNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }
}
