import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ListeRestau from "./components/ListeRestau";
import DetailsRestau from "./components/DetailsRestau";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const RestauNavigation = (props) => {
  return (
    <Stack.Navigator >    
       <Stack.Screen
        name="ListRestau"
        children={()=><ListeRestau restaurants={props.restaurants}/>} 
      />
       <Stack.Screen
        name="DetailsRestau"
        children={()=><DetailsRestau restaurants={props.restaurants}/>}
      />
    </Stack.Navigator>
  );
}

export default RestauNavigation; // Stack-Navigator for Screen 1 Tab