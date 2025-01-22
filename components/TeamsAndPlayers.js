import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamsAndPlayers = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/api/teams');
        setTeams(response.data.teams);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/api/players');
        setPlayers(response.data.players);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchTeams();
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>MLB Teams and Players</h1>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsAndPlayers;
