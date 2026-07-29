package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "threshold")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Threshold {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String thresholdId;
    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    private String activityArea;
    private String assetId;
    private String metricCode;
    private String operator;
    private String value1;
    private String value2;
    private String unit;
    private String sourceDocumentType;
    @Column(length = 1000)
    private String sourceDocumentDetails;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
}
