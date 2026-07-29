package az.risk.registry.service;

import az.risk.registry.entity.Role;
import az.risk.registry.repository.RoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleService extends AbstractCrudService<Role, Long> {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    protected RoleRepository getRepository() {
        return roleRepository;
    }

    @Override
    protected String getResourceName() {
        return "Role";
    }
}
