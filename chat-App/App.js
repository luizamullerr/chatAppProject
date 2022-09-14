import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TeladeLogin from './screens/Login';
import Registrar from './screens/Registrar';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: {backgroundColor: "#008E9B"},
  headerTitleStyle: {color:"white"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
         <Stack.Screen name='Login' component={TeladeLogin} />
         <Stack.Screen name='Registrar' component={Registrar} />
         <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
