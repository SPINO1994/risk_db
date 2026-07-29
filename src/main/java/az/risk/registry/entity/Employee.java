package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employee")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String department;
    private String position;
    private String phone;
    private String email;
    private String relatedRoleId;
    private String managerWorkerId;
    private String status;

    @Transient
    private String relatedRoleName;
    @Transient
    private String managerWorkerName;
}
