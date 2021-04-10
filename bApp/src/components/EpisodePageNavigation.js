import React from 'react';
import {View,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Video from "../screen/Video";
import SeeEpisode from "../screen/SeeEpisode"
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();
 

const EpisodePageNavigation = () => {
    return(

<>
       
          <Stack.Navigator
           screenOptions={{
            headerShown: false
          }}
          >
           
              <>
              <Stack.Screen name="Video" component={Video} />
              <Stack.Screen name="SeeEpisode" component={SeeEpisode} />


  
  
              </>
           
          </Stack.Navigator>
     
        </>  
    )
}

export default EpisodePageNavigation;