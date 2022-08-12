import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from "../screens/LogIn"
import Register from "../screens/Register"

const Stack = createNativeStackNavigator();
const RegisterStackScreen = () => {
    return (
            <Stack.Navigator> 
                 <Stack.Screen name='Login' component={LogIn}/>
                 <Stack.Screen name='Register' component={Register}/>
            </Stack.Navigator> 
    );
}

export default RegisterStackScreen;  

