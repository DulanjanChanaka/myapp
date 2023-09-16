import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./AuthScreen";
import AuthStack from "./AuthStack";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        {user ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{
              headerShown: false,
            }}
            
          />
        ) : (
          <Stack.Screen
            name="InitialScreenOnStart"
            component={AuthScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
