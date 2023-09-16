import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const CharacterCard = ({ character }) => {
  return (
    <Card >
      <Card.Title>{character.fullName}</Card.Title>
      <Card.Divider />
      <Image
        source={{ uri: character.imageUrl }}
        style={{ width: 300, height: 300, borderRadius:20 }}
      />
      <Text>First Name: {character.firstName}</Text>
      <Text>Last Name: {character.lastName}</Text>
      <Text>Title: {character.title}</Text>
      <Text>Family: {character.family}</Text>
      {/* Add more character information as needed */}
    </Card>
  );
};

export default CharacterCard;
