package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "threat_assessment")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ThreatAssessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String threatId;
    private String assetId;
    private String discrepancyId;
    @Column(length = 2000)
    private String potentialEvent;
    private String implementationTechnology;
    private String frequency;
    private String probabilityDegree;
    private LocalDate assessmentDate;
    private String status;

    @Transient
    private String threatName;
    @Transient
    private String assetName;
    @Transient
    private String discrepancyName;
}
