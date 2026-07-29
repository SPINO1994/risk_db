package az.risk.registry.service;

import az.risk.registry.entity.RiskRegister;
import az.risk.registry.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiskRegisterService extends AbstractCrudService<RiskRegister, Long> {

    private final RiskRegisterRepository riskRegisterRepository;
    private final ThreatAssessmentRepository threatAssessmentRepository;
    private final DiscrepancyRepository discrepancyRepository;
    private final ConsequenceRepository consequenceRepository;
    private final SolutionRepository solutionRepository;
    private final EmployeeRepository employeeRepository;

    public RiskRegisterService(RiskRegisterRepository riskRegisterRepository,
                               ThreatAssessmentRepository threatAssessmentRepository,
                               DiscrepancyRepository discrepancyRepository,
                               ConsequenceRepository consequenceRepository,
                               SolutionRepository solutionRepository,
                               EmployeeRepository employeeRepository) {
        this.riskRegisterRepository = riskRegisterRepository;
        this.threatAssessmentRepository = threatAssessmentRepository;
        this.discrepancyRepository = discrepancyRepository;
        this.consequenceRepository = consequenceRepository;
        this.solutionRepository = solutionRepository;
        this.employeeRepository = employeeRepository;
    }

    @Override
    protected RiskRegisterRepository getRepository() {
        return riskRegisterRepository;
    }

    @Override
    protected String getResourceName() {
        return "RiskRegister";
    }

    @Override
    public List<RiskRegister> search(String query) {
        List<RiskRegister> items = riskRegisterRepository.findByNameContainingIgnoreCase(query);
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    protected void enrichDisplayNames(RiskRegister risk) {
        if (risk.getThreatScenarioId() != null) {
            try {
                Long id = Long.parseLong(risk.getThreatScenarioId().trim());
                threatAssessmentRepository.findById(id).ifPresent(ta -> risk.setThreatScenarioName(ta.getPotentialEvent()));
            } catch (Exception ignored) {}
        }
        if (risk.getDiscrepancyId() != null) {
            try {
                Long id = Long.parseLong(risk.getDiscrepancyId().trim());
                discrepancyRepository.findById(id).ifPresent(d -> risk.setDiscrepancyName(d.getName()));
            } catch (Exception ignored) {}
        }
        if (risk.getConsequenceId() != null) {
            try {
                Long id = Long.parseLong(risk.getConsequenceId().trim());
                consequenceRepository.findById(id).ifPresent(c -> risk.setConsequenceName(c.getName()));
            } catch (Exception ignored) {}
        }
        if (risk.getSolutionId() != null) {
            try {
                Long id = Long.parseLong(risk.getSolutionId().trim());
                solutionRepository.findById(id).ifPresent(s -> risk.setSolutionName(s.getName()));
            } catch (Exception ignored) {}
        }
        if (risk.getOwnerWorkerId() != null) {
            try {
                Long id = Long.parseLong(risk.getOwnerWorkerId().trim());
                employeeRepository.findById(id).ifPresent(e -> risk.setOwnerWorkerName(e.getFullName()));
            } catch (Exception ignored) {}
        }
    }
}
