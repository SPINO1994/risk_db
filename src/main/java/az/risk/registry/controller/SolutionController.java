package az.risk.registry.controller;

import az.risk.registry.entity.Solution;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.SolutionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/solutions")
public class SolutionController extends AbstractCrudController<Solution, Long> {

    private final SolutionService solutionService;

    public SolutionController(SolutionService solutionService) {
        this.solutionService = solutionService;
    }

    @Override
    protected CrudService<Solution, Long> getService() {
        return solutionService;
    }
}
