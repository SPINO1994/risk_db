package az.risk.registry.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "asset")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String assetId;
    private String category;
    private String name;
    private String ownerWorkerId;
    private String responsibleWorkerId;
    private String qualitativeValue;
    private BigDecimal quantitativeValue;
    private String currency;
    private String status;
    @Column(length = 2000)
    private String note;
}
