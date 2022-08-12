import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ImgDetail from '../screens/ImgDetail';

const r = 'Ruta'
const h = 'Home'

const HomeStackScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator> 
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator> 
    );
}

export default HomeStackScreen;  

