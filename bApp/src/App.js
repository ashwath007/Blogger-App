import React, {useEffect} from 'react'

import 'react-native-gesture-handler'

import auth from '@react-native-firebase/auth'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {useDispatch, connect} from 'react-redux'

import AddPost from './screen/AddPost'
import SignIn from './screen/SignIn'
import SignUp from './screen/SignUp'
import Home from './screen/Home'
import Profile from './screen/Profile'
import Video from './screen/Video'
import CustomHeader from './layout/CustomHeader'

import {SET_USER, IS_AUTHTHENTICATED} from './action/action.types'

import database from '@react-native-firebase/database'
import EmptyContainer from './components/EmptyContainer'
import {requestPermission} from './utils/AskPermission'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// LOGOS https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json
const Stack = createStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App =({authState}) => {

  const dispatch = useDispatch();


  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })

      console.log(user._user.uid)

      database()
        .ref(`/users/${user._user.uid}`)
        .on('value', (snapshot) => {
          console.log('USER DETAILS', snapshot.val())
          dispatch({
            type: SET_USER,
            payload: snapshot.val(),
          })
        })


    } else {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: false
      })
    }
  }

  useEffect(() => {
    requestPermission()
    const susbcriber = auth().onAuthStateChanged(onAuthStateChanged)
    return susbcriber;
  }, [])

  if (authState.loading) {
      return <EmptyContainer/>
  }

    return(
        
        <>
        <NavigationContainer>
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
            {authState.isAuthenticated ? (
              <>
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
   
              
              </>
            ) : (
              <>
               <Tab.Screen name="SignIn" component={SignIn}
               options={{
                tabBarLabel: 'SignIn',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="login" color={color} size={26} />
                ),}}
               />
               <Tab.Screen name="SignUp" component={SignUp}
                options={{
                  tabBarLabel: 'SignUp',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="logout" color={color} size={26} />
                  ),}}
               
               />
              </>
            )}
          </Tab.Navigator>
        </NavigationContainer>
        </>  
        
    )
}

const mapStateToProps = (state) => ({
  authState: state.auth
})

export default connect(mapStateToProps)(App)