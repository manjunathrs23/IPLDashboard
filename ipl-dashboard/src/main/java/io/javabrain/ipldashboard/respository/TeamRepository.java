package io.javabrain.ipldashboard.respository;
import org.springframework.data.repository.CrudRepository;

import io.javabrain.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    
    Team findByTeamName(String teamName);

}
