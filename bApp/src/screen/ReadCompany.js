import React,{useEffect,useState} from 'react'
import {View,Text,Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import database from '@react-native-firebase/database';
// import {getPostById} from '../action/post'
import EmptyContainer from '../components/EmptyContainer'
import {Right,Left,H3,  Fab,Icon,Container} from 'native-base'
import Tts from 'react-native-tts';
import { Button } from 'react-native-paper';
import { material,sanFranciscoSpacing,robotoWeights} from 'react-native-typography'


const ReadCompany = ({route}) => {
    const [loading,setLoading] = useState('');
    useEffect(()=>{
        // getPostById(route.params.id)

        getListingById(route.params.id)

    },[]);

    const getListingById = (ID) => {
        setLoading(true)
        console.log(ID)
        database()
        .ref(`/listing/${ID}`)
        .on('value', (snapshot) => {
            console.log('USER Data: ', snapshot.val())
        setLoading(false)

            // if (snapshot.val()) {
            //     console.log(snapshot.val().picture)
            //     setLocation(snapshot.val().location)
            //     setDescription(snapshot.val().description)
            //     setStory(snapshot.val().story)
            //     setImage(snapshot.val().picture)
            //     setAuthor(snapshot.val().by)
            //     setNumberOfHearts(snapshot.val().vote)
            //     setUid(snapshot.val().userId)
            //     setLoading(false)
            // } else {
            //     console.log("Error")
        
            // }
        })
    }
    if(loading){
        return <EmptyContainer/>
     }
     else{

     
    return(
        <View>
            <Text>
            Here
            </Text>
            <TouchableOpacity> 
                <Text>
                    Click here
                </Text>
            </TouchableOpacity>
        </View>
    )
     }
}


export default ReadCompany;