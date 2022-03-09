import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Recherche from'./components/Recherche';
import ListeRestau from'./components/ListeRestau';
import ContactForm from './components/ContactForm';

const Tab = createBottomTabNavigator();

function MyTabs() {

  const restaurants = [
    {id:1,image:require("../assets/restaurant1.png"),titre: "Bonjour", description: "Sent le poisson pas frais autant à l'extérieur que sur le le personnel du restaurant",ville:"Lille"},
    {id:2,image:require("../assets/restaurant2.png"),titre: "Bonjour", description: "Pizza cuite au feu de bois, comme le restaurant. Une incroyable prise de risque et de mal d'estomac à prévoir",ville:"Lille"},
    {id:3,image:require("../assets/restaurant3.png"),titre: "Bonjour", description: "Burger avec gras implanté à la piqûres et changement de toiture à prévoir",ville:"Lille"},
    {id:4,image:require("../assets/restaurant4.png"),titre: "Bonjour", description: "Besoin de déserbant pour ce restaurant végan. Feuille de salade trop sèche.",ville:"Lille"},
    {id:5,image:require("../assets/restaurant5.png"),titre: "Bonjour", description: "Manque de chauffage et les fenêtre cassée n'aide pas.", ville:"Lille"}
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