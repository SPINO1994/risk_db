package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "raci_matrix")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RaciMatrix {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String raciId;
    private String activityArea;
    private String activityStage;
    private String activityCode;
    private String activityName;
    @Column(length = 1000)
    private String responsibleRoleIds;
    private String accountableRoleId;
    @Column(length = 1000)
    private String consultedRoleIds;
    @Column(length = 1000)
    private String informedRoleIds;
    private String status;
}
