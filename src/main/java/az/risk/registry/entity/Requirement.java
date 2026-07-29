package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "requirement")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Requirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    @Column(length = 1000)
    private String securityPrinciples;
    private String activityArea;
    private String sourceType;
    @Column(length = 1000)
    private String sourceDetails;
    private String clause;
    private String status;
}
