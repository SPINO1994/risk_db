package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "threat")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Threat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    @Column(length = 2000)
    private String description;
    private String source;
    private String target;
    private String intentNature;
    private String targetArea;
    private String status;
}
