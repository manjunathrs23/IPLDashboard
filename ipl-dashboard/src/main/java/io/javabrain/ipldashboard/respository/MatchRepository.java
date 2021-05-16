package io.javabrain.ipldashboard.respository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import io.javabrain.ipldashboard.model.Match;


public interface MatchRepository extends CrudRepository<Match, Long>{

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    @Query("select distinct m.team1 from Match m")
    List<String> getAllTeamName();

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDate(
        @Param("teamName") String teamName,
        @Param("dateStart") LocalDate dateStart,
        @Param("dateEnd") LocalDate dateEnd
    );
    
    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        Pageable pageable = PageRequest.of(0, count);
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, pageable);
    }
}
