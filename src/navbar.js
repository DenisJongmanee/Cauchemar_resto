import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Recherche from'./components/Recherche';
import ListeRestau from'./components/ListeRestau';
import ContactForm from './components/ContactForm';

const Tab = createBottomTabNavigator();

function MyTabs() {

  const restaurants = [
    {
      id: 1,
      image:require("../assets/restaurant1.png"),
      titre: "Le dégueustaurant", 
      description: "Sent le poisson pas frais autant à l'extérieur que sur le personnel du restaurant. Poisson qui a été péché dans la Seine.",
      ville:"Paris",
      note: 0.2
    },
    {
      id: 2,
      image:require("../assets/restaurant2.png"),
      titre: "La cuisson à point",
      description: "Pizza cuite au feu de bois, comme le restaurant. Une incroyable prise de risque et de mal d'estomac à prévoir.",
      ville:"Strasbourg",
      note: 0.5
    },
    {
      id: 3,
      image:require("../assets/restaurant3.png"),
      titre: "Le gras Vie et...",
      description: "Burger avec gras implanté à la piqûres et changement de toiture à prévoir.",
      ville:"Marseille",
      note: 0.5
    },
    {
      id: 4,
      image:require("../assets/restaurant4.png"),
      titre: "Végan de toi",
      description: "Besoin de déserbant pour ce restaurant végan. Feuille de salade trop sèche.",
      ville:"Bordeaux",
      note: 0.7
    },
    {
      id: 5,
      image:require("../assets/restaurant5.png"),
      titre: "Le Plaine Air", 
      description: "Manque de chauffage et les fenêtre cassée n'aide pas.",
      ville:"Lille",
      note: 0.6
    },
    {
      id: 6,
      image:require("../assets/restaurant6.png"),
      titre: "Un titanic V2",
      description: "Tueur en série devant le restaurant, accueil à revoir.",
      ville:"Lille",
      note: 1
    },
    {
      id: 7,
      image:require("../assets/restaurant7.png"),
      titre: "Le Plein Vol",
      description: "L'aviateur est incompétent tout comme la cuisine. Crash assuré.",
      ville:"Lille",
      note: 0.8
    }
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
        children={()=><Recherche restaurants={restaurants}/>} 
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