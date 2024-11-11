// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

// Définition du composant Player
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team} <br />
          <strong>Nationalité:</strong> {nationality} <br />
          <strong>Numéro de maillot:</strong> {jerseyNumber} <br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Définir des valeurs par défaut
Player.defaultProps = {
  name: 'Joueur Anonyme',
  team: 'Aucune équipe',
  nationality: 'Inconnue',
  jerseyNumber: '0',
  age: 'Inconnu',
  imageUrl: 'https://via.placeholder.com/150',
};

export default Player;
