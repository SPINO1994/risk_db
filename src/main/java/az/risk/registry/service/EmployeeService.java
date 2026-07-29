package az.risk.registry.service;

import az.risk.registry.entity.Employee;
import az.risk.registry.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends AbstractCrudService<Employee, Long> {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    protected EmployeeRepository getRepository() {
        return employeeRepository;
    }

    @Override
    protected String getResourceName() {
        return "Employee";
    }
}
