import React,{useState} from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';

import {Container,
Form,
Item,
Input,
Text,
Button,
Thumbnail,
Content} from 'native-base'


import storage from '@react-native-firebase/storage'
import ProgessBar from 'react-native-progress'


import ImagePicker from 'react-native-image-picker'
import {options} from '../utils/options'


import propTypes from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react'


const SignUp = ({signUp}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [instaUserName,setInstaUserName] = useState('')
    const [country,setCountry] = useState('')
    const [bio,setBio] = useState('')
    const [image,setImage] = useState('https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png')




    return(
        <View>
            <Text>
            Signup
            </Text>
        </View>
    )
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

SignUp.propTypes = {
    signUp: propTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(SignUp)