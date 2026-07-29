package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "consequence")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Consequence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String type;
    private String name;
    @Column(length = 2000)
    private String description;
    private String threatScenarioId;
    private String assetId;
    private String severity;
    private String status;

    @Transient
    private String threatScenarioName;
    @Transient
    private String assetName;
}
