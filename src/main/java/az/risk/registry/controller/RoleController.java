package az.risk.registry.controller;

import az.risk.registry.entity.Role;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.RoleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/roles")
public class RoleController extends AbstractCrudController<Role, Long> {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    protected CrudService<Role, Long> getService() {
        return roleService;
    }
}
