package az.risk.registry.service;

import az.risk.registry.entity.Role;
import az.risk.registry.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<Role> search(String query) {
        List<Role> items = roleRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }
}
