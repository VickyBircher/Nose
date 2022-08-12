import { StyleSheet, Text, View } from "react-native"; 
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile'; 
import Ionicons from "react-native-vector-icons/Ionicons";
import NewPublication from '../screens/NewPublication';
import { NavigationContainer } from "@react-navigation/native";
import ImgDetail from "../screens/ImgDetail";
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';

const Navbar = () => {

    Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator
    style={styles.navbottom}
        initialRouteName="HomeName"
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 80 },
          headerShown: false,
          tabBarIcon: ({ focused, color , size }) => {
            
            let iconName;
            let rn = route.name;

            
            if (rn === "NewPub") {
              iconName = focused ? "list" : "list-outline";
            }

            else if (rn === "HomeName") {
              iconName = focused ? "home" : "home";
            } 
            else if (rn === "Profile") {
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
        <Tab.Screen name="NewPub" component={NewPublication} />
        <Tab.Screen name="HomeName" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name='ImgDetail' component={ImgDetail}/>
        <Tab.Screen name="Login" component={LogIn} />
        <Tab.Screen name='Register' component={Register}/>
      </Tab.Navigator>
    
  )
}
export default Navbar;

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