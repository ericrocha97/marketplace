import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator }  from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons'

import Catalog from './pages/Catalog';
import Header from './components/Header';
import Cart from './pages/Cart';
import { Platform } from 'react-native';


const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle:{ backgroundColor: '#312e38'}
        }}
        initialRouteName="Catalog"
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerStyle:{
              backgroundColor: '#312e38',
              shadowOffset: {
                width: 0,
                height: 0
              } ,
              elevation: 0,
              height: Platform.OS === 'ios'? 60 : 20,
            },
            headerTitleAlign: 'center',
            headerTitle: () => <Header />,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerLeftContainerStyle:{
              marginLeft: 20,
            },
            headerBackImage: () => (
              <Feather name="chevron-left" size={24} color="#f3f9ff" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}