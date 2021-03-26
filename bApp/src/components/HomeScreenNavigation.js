import React from 'react'
import AddPost from '../screen/AddPost'
import SignIn from '../screen/SignIn'
import SignUp from '../screen/SignUp'
import Home from '../screen/Home'
import Profile from '../screen/Profile'
import Video from '../screen/Video'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {useDispatch, connect} from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


const HomeScreenNavigation = () => {
    return(

        <>  
        <Tab.Navigator
          backBehavior='initialRoute'
          screenOptions={{
            header: (props) => <CustomHeader {...props} />
          }}
          tabBarOptions={{
            activeTintColor: '#E21717',
          }}
          activeColor="#fff"
        barStyle={{ backgroundColor: '#E21717' }}
          >
               <Tab.Screen name="Home" component={Home} 
               options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),}}
               
               />
                <Tab.Screen name="Video" component={Video} 
                options={{
                  tabBarLabel: 'Podcast',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="video" color={color} size={26} />
                  ),}}
               />
               <Tab.Screen name="AddPost" component={AddPost} 
                options={{
                  tabBarLabel: 'Addpost',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="post" color={color} size={26} />
                  ),}}
               />
                <Tab.Screen name="Profile" component={Profile} 
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                  ),}}
               />
              </Tab.Navigator>
              
              </>
    )
}

export default HomeScreenNavigation;