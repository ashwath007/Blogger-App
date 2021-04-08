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

    const [ceo,setCeo] = useState('');
    const [cname,setCname] = useState('');
    const [cteam,setCteam] = useState('');
    const [ctype,setCtype] = useState('');

    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const [facebook,setFacebook] = useState('');
    const [headquartes,setHeadquartes] = useState('');
    const [history,setHistory] = useState('');
    const [id,setId] = useState('');
    const [linkedin,setLinkedin] = useState('');
    const [location,setLocation] = useState('');
    const [phone,setPhone] = useState('');
    const [picture,setPicture] = useState('');
    const [story,setStory] = useState('');
    const [userId,setUserId] = useState('');
    const [author,setAuthor] = useState('');











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
    

            if (snapshot.val()) {
                console.log(snapshot.val().picture)
                setLocation(snapshot.val().location)
                setDescription(snapshot.val().description)
                setCeo(snapshot.val().ceo)
                setCname(snapshot.val().cname)
                setCteam(snapshot.val().cteam)
                setCtype(snapshot.val().ctype)

                setDate(snapshot.val().date)
                setFacebook(snapshot.val().facebook)
                setHeadquartes(snapshot.val().headquarters)
                setHistory(snapshot.val().history)
                setId(snapshot.val().id)
                setLinkedin(snapshot.val().linked)
                setPhone(snapshot.val().phone)
                setUserId(snapshot.val().userId)



                setStory(snapshot.val().story)
                setPicture(snapshot.val().picture)
                setAuthor(snapshot.val().by)
                setLoading(false)
            } else {
                console.log("Error")
        
            }
        })
    }
    if(loading){
        return <EmptyContainer/>
     }
     else{

     
    return(
        <ScrollView>
            <Text>
            Here
            </Text>
            
                <Text>
                    {cname}
                </Text>
                <Text>
                    {cteam}
                </Text>
                <Text>
                    {ceo}
                </Text>
                <Text>
                    {ctype}
                </Text>
                <Text>
                    {date}
                </Text>
                <Text>
                    {description}
                </Text>
                <Text>
                    {facebook}
                </Text>
                <Text>
                    {headquartes}
                </Text>
                <Text>
                    {history}
                </Text>
                <Text>
                    {story}
                </Text>
                <Text>
                    {id}
                </Text>
                <Text>
                    {userId}
                </Text>
                <Text>
                    {linkedin}
                </Text>
                <Text>
                    {phone}
                </Text>
                <Text>
                    {picture}
                </Text>
                <Text>
                    {author}
                </Text>
        </ScrollView>
    )
     }
}


export default ReadCompany;