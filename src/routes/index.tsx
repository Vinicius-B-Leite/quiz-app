import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import Quiz from "../screens/quiz";
import Results from "../screens/results";


export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
                <Stack.Screen name="Results" component={Results} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}