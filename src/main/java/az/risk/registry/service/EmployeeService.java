package az.risk.registry.service;

import az.risk.registry.entity.Employee;
import az.risk.registry.repository.EmployeeRepository;
import az.risk.registry.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService extends AbstractCrudService<Employee, Long> {

    private final EmployeeRepository employeeRepository;
    private final RoleRepository roleRepository;

    public EmployeeService(EmployeeRepository employeeRepository, RoleRepository roleRepository) {
        this.employeeRepository = employeeRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    protected EmployeeRepository getRepository() {
        return employeeRepository;
    }

    @Override
    protected String getResourceName() {
        return "Employee";
    }

    @Override
    public List<Employee> search(String query) {
        List<Employee> items = employeeRepository.findByFullNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(Employee employee) {
        if (employee.getRelatedRoleId() != null) {
            try {
                Long id = Long.parseLong(employee.getRelatedRoleId().trim());
                roleRepository.findById(id).ifPresent(r -> employee.setRelatedRoleName(r.getName()));
            } catch (Exception ignored) {}
        }
        if (employee.getManagerWorkerId() != null) {
            try {
                Long id = Long.parseLong(employee.getManagerWorkerId().trim());
                employeeRepository.findById(id).ifPresent(m -> employee.setManagerWorkerName(m.getFullName()));
            } catch (Exception ignored) {}
        }
    }
}
