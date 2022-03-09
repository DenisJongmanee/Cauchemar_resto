import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Recherche from'./components/Recherche';
import ListeRestau from'./components/ListeRestau';
import ContactForm from './components/ContactForm';

const Tab = createBottomTabNavigator();

function MyTabs() {

  const restaurants = [
    {id:1,image:require("../assets/restaurant1.png"),titre: "Bonjour", description: "description"},
    {id:2,image:require("../assets/restaurant1.png"),titre: "Bonjour", description: "description"},
    {id:3,image:require("../assets/restaurant1.png"),titre: "Bonjour", description: "description description descriptiondescription anticonstitutionnellement criptiondescription"}
  ]

  return (
    <Tab.Navigator
      initialRouteName="ContactForm"
      screenOptions={{
        tabBarActiveTintColor: '#2b8eff',
      }}
    >
      <Tab.Screen
        name="Restaurants"
        children={()=><ListeRestau restaurants={restaurants}/>}     
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={Recherche}
        options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactForm}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;