package projet.predictionmalade.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Collection;
import java.util.UUID;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Compte implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idCompte;
    @OneToOne(mappedBy = "compte")
    private User user;

}
