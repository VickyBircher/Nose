import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ImgDetail from '../screens/ImgDetail';
import Publication from '../components/Publication';

const Stack = createNativeStackNavigator();
const PublicationStackScreen = () => {
    return (
            <Stack.Navigator> 
                 <Stack.Screen name='HomeName' component={Home}/>
                 <Stack.Screen name='ImgDetail' component={ImgDetail}/>
                 <Stack.Screen name='Publication' component={Publication}/>
            </Stack.Navigator> 
    );
}

export default PublicationStackScreen;  

