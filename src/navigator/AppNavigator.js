import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserDetails from '../components/UserDetails'
import Home from '../components/Home'
import BookAppointment from '../components/BookAppointment'

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="userDetails"
                screenOptions={{
                    title: 'Appointment App',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        letterSpacing: 1,
                    },
                }}
            >
                <Stack.Screen
                    name="userDetails"
                    component={UserDetails}
                    options={{ title: 'User Details' }}
                />
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="bookAppointment"
                    component={BookAppointment}
                    options={{ title: 'Book Appointment' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;