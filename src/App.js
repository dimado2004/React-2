// src/App.js
import React from 'react';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App ;
