import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../constant/Colors";
import { auth } from "../firebase/firebase";
import CharacterCard from './characterCard';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard({ navigation }: { navigation: any }) {
  
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  const handleSignout = async () => {
    await auth.signOut();
  };
  const Modal = () => {
    Alert.alert("Auth App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  return (
    <ScrollView>
      <View>
        <View >
        <View style={styles.profile}>
          <Text></Text>
       <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="ios-settings-outline" size={34} color="black" />
       </TouchableOpacity>
      </View>
        </View>
      
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
  profile: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingRight:20,
  } 
});
