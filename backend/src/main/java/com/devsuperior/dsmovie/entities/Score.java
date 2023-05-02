package com.devsuperior.dsmovie.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tb_score")
@Data
public class Score {

     @EmbeddedId
     private ScorePK id = new ScorePK();
     private Double nota;

     public void setMovie(Movie movie) {
          id.setMovie(movie);
     }

     public void setUser(User user) {
          id.setUser(user);
     }

}
