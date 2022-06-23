import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/components/Home";
import Ruta from "./src/components/Ruta";
import NewPublication from "./src/components/NewPublication";
//rnfe


//Screen Names
const ruta = "Ruta";
const homeName = "Home";
const newPublicationName = "NewPublication";


//Navbar
const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer> 
      <Tab.Navigator
      style={styles.navbottom}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 80 },
          tabBarIcon: ({ focused, color , size }) => {
            
            let iconName;
            let rn = route.name;

            
            if (rn === newPublicationName) {
              iconName = focused ? "list" : "list-outline";
            }

            else if (rn === homeName) {
              iconName = focused ? "home" : "home";
            } 
            else if (rn === ruta) {
              iconName = focused ? "person" : "person";
            }
            return <Ionicons name={iconName} size={40} color={color} /> ;
          },
        })}
        
        tabBarOptions={{
          showLabel: false,
          tabBarLabel: false,
          activeTintColor: '#ED4855',
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#9D2932',
          inactiveBackgroundColor: '#9D2932',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3,
                    backgroundImage: "./src/img/navbar.svg",
                  }
       }}
        

        
      
      >
        <Tab.Screen name={newPublicationName} component={NewPublication} />
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={ruta} component={Ruta} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
  //Termina Nav
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E49C7A",
    alignItems: "center",
    justifyContent: "center",
  },
  navbottom:{
    backgroundColor: "9D29320",
  }

});
