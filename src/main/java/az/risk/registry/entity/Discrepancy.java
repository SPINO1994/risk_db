package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "discrepancy")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Discrepancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    private String violatedRequirementId;
    private String assetId;
    private String addressObject;
    private String severity;

    @Transient
    private String violatedRequirementName;
    @Transient
    private String assetName;
}
