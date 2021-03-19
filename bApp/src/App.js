import React, {useEffect} from 'react';
import store from './store';
import { Provider } from 'react-redux'
import {Text} from 'react-native'

import 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {useDispatch, connect} from 'react-redux'


import AddPost from './screen/AddPost'
import SignIn from './screen/Signin'
import SignUp from './screen/Signup'
import Home from './screen/Home'
import CustomeHeader from './layout/CustomHeader'

import {SET_USER, IS_AUTHENTICATED} from './action/action.types'

import database from '@react-native-firebase/database'
import EmptyContainer from './components/EmptyContainer'
import {requestPermission} from './utils/AskPermission'


const Stack = createStackNavigator();


const App = ({authState}) => {
    
  
  const dispatch = useDispatch();

  const onAuthStateChanged = (user) => {
    if(user){
      dispatch({
        type:IS_AUTHENTICATED,
        payload:true
      })

      console.log(user._user.uid)
      database()
      .ref(`/users/${user._user.uid}`)
      .on('value',(snapshot)=>{
        console.log('USER DETAILS: ',snapshot.val())
      })
    }
  }
  return( 
       <Text>
         Vickys
       </Text>
    )
}

export default App