package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "incident")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String relatedRiskId;
    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    private LocalDateTime occurrenceDateTime;
    private LocalDate discoveryDate;
    private String status;
    private String responseOption;
    private String responseMethod;
    private String responseSolution;
    @Column(length = 2000)
    private String rootCause;
    @Column(length = 2000)
    private String result;
    private LocalDateTime closureDateTime;

    @Transient
    private String relatedRiskName;
}
