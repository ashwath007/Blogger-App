import React,{useState} from 'react'
import {View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    H3,
    Label

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
          
    
            <Image
              source={{uri:'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80'}}
              style={{width: null, height: 150, marginTop: 30}}
              resizeMode="contain"
            />
    
            <Form style={{padding:20,marginTop:56}}>
            <Label style={{marginLeft:8}}>
                  Email
                </Label>
              <Item style={styles.formItem}>
                <Input
                  placeholder="Enter your registerd email"
                  value={email}
                  style={{color: '#000'}}
                  onChangeText={(text) => setEmail(text)}
                />
              </Item>
              <Label style={{marginLeft:8}}>
                  Password
                </Label>
              <Item style={styles.formItem}>
              <Input
                  placeholder="Enter your registerd password"
                  value={password}
                  secureTextEntry={true}
                  style={{color: '#000'}}
                  onChangeText={(text) => setPassword(text)}
                />
              
              </Item>
              <Button block onPress={doSignIn} style={{backgroundColor:"#E21717"}}>
                <Text>SignIn</Text>
              </Button>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: '#E21717', textAlign: 'center'}}>
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
      backgroundColor: '#fff',
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