import { React, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const MatchPage = () => {

  const [matches, setMatches] = useState();
  const {teamName, year} = useParams();

  useEffect(
    () => {
      const fetchMatches = async () => {
        
        const response = await fetch(`http://localhost:1999/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
        console.log(data)
     
    }
    fetchMatches();
    }, []
  );

  if(!matches) {
    return <h1>Team not found</h1>
  }


  return (
    <div className="MatchPage">
      <h1>Match page</h1>
      {matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)}
    </div>
  );
}
