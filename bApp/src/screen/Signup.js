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
import {connect} from 'react-redux'


const SignUp = ({navigation,signUp}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [instaUserName,setInstaUserName] = useState('')
    const [country,setCountry] = useState('')
    const [bio,setBio] = useState('')
    const [image,setImage] = useState('https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80')


    const [imageUploading,setImageUploading] = useState(false)
    const [uploadStatus,setUploadStatus] = useState(null)


    const chooseImage = async () => {
            ImagePicker.showImagePicker(options, (response) => {
                console.log('Responce : ' , response)
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton
                    );
                    alert(response.customButton);
                  } else {
                        console.log(response)
                        uploadImage(response)
                  }



            })
    }

    const uploadImage = async (response) => {
        setImageUploading(true)
        const reference = storage().ref(response.fileName)


        const task = reference.putFile(response.path)
        task.on('state_changed',(taskSnap) => {
            const precentage = (taskSnap.bytesTransferred / taskSnap.totalBytes) * 1000
            setUploadStatus(precentage)
        })
        task.then(async () => {
            const url = await reference.getDownloadURL()

            setImage(url)
            setImageUploading(false)
        })

    }

    const doSignUp = async () => {
        signUp({name,email,password,instaUserName,country,bio,image})
    }
    return (
        <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={chooseImage}>
                  <Thumbnail large source={{uri: image}} />
                </TouchableOpacity>
              </View>
    
              {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )}
    
              <Form>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="name"
                    value={name}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="email"
                    value={email}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setEmail(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="password"
                    value={password}
                    secureTextEntry={true}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setPassword(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Instagram user name"
                    value={instaUserName}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setInstaUserName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Your Short Bio"
                    value={bio}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setBio(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="country"
                    value={country}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setCountry(text)}
                  />
                </Item>
                <Button regular block onPress={doSignUp}>
                  <Text>SignUp</Text>
                </Button>
                <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={{marginTop: 10}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Already have an account, SignIn here
                </Text>
              </TouchableOpacity>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      );
    
   
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

SignUp.propTypes = {
    signUp: propTypes.func.isRequired
}
 
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'flex-start',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      marginBottom: 20,
    },
  });
export default connect(null,mapDispatchToProps)(SignUp)