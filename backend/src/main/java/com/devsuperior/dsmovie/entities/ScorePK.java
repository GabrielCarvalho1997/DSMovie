package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Embeddable
@Data
public class ScorePK implements Serializable {

     @ManyToOne
     @JoinColumn(name = "movie_id")
     private Movie movie;

     @ManyToOne
     @JoinColumn(name = "user_id")
     private User user;
}
