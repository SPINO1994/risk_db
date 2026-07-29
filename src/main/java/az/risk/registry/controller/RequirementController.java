package az.risk.registry.controller;

import az.risk.registry.entity.Requirement;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.RequirementService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/requirements")
public class RequirementController extends AbstractCrudController<Requirement, Long> {

    private final RequirementService requirementService;

    public RequirementController(RequirementService requirementService) {
        this.requirementService = requirementService;
    }

    @Override
    protected CrudService<Requirement, Long> getService() {
        return requirementService;
    }
}
