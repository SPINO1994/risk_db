package az.risk.registry.controller;

import az.risk.registry.entity.Employee;
import az.risk.registry.service.CrudService;
import az.risk.registry.service.EmployeeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController extends AbstractCrudController<Employee, Long> {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    protected CrudService<Employee, Long> getService() {
        return employeeService;
    }
}
