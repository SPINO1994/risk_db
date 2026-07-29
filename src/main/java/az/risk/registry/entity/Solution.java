package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "solution")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String solutionId;
    private String controlType;
    private String name;
    @Column(length = 2000)
    private String description;
    private String applicationArea;
    private String technology;
    private String applicationMethod;
}
