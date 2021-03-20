import React,{useState} from 'react'
import {View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    H3

} from 'native-base'

import {connect} from 'react-redux'
import {signIn} from '../action/auth'
import propTypes from 'prop-types'


const SignIn = ({navigation, signIn}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const doSignIn = () => {
        signIn({email,password})
    }

    return (
        <Container style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <H3 style={styles.heading}>Welcome to the Travel-gram Social App</H3>
    
            <Image
              source='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png'
              style={{width: null, height: 150, marginTop: 30}}
              resizeMode="contain"
            />
    
            <Form>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="enter your registerd email"
                  value={email}
                  style={{color: '#eee'}}
                  onChangeText={(text) => setEmail(text)}
                />
              </Item>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="enter your registerd password"
                  value={password}
                  secureTextEntry={true}
                  style={{color: '#eee'}}
                  onChangeText={(text) => setPassword(text)}
                />
              </Item>
              <Button rounded block onPress={doSignIn}>
                <Text>SignIn</Text>
              </Button>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Do not have an account, SignUp here
                </Text>
              </TouchableOpacity>
            </Form>
          </ScrollView>
        </Container>
      );
}

SignIn.propTypes = {
     signIn: propTypes.func.isRequired
}

const mapDiapatchToProps = {
    signIn: (data) => signIn (data)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#fdcb9e',
      marginHorizontal: 5,
      marginTop: 30,
    },
    formItem: {
      marginBottom: 20,
    },
  });
export default connect(null,mapDiapatchToProps)(SignIn)