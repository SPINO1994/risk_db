package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "risk_register")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RiskRegister {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    private String threatScenarioId;
    private String discrepancyId;
    private String consequenceId;
    private String qualitativeRating;
    private BigDecimal quantitativeRating;
    private String treatmentOption;
    private String solutionId;
    private Boolean incidentOccurred;
    private String status;
    private String ownerWorkerId;

    @Transient
    private String threatScenarioName;
    @Transient
    private String discrepancyName;
    @Transient
    private String consequenceName;
    @Transient
    private String solutionName;
    @Transient
    private String ownerWorkerName;
}
