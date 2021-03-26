import React,{useEffect,useState} from 'react'
import {View,Text} from 'react-native'
import database from '@react-native-firebase/database';

// import {getPostById} from '../action/post'
import EmptyContainer from '../components/EmptyContainer'

const Read = ({route}) => {
    
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [story, setStory] = useState('')
    const [loading,setLoading] = useState(false)

        const getPostById = (ID) => {
            setLoading(true)

            database()
            .ref(`/posts/${ID}`)
            .on('value', (snapshot) => {
                console.log('USER Data: ', snapshot.val())
                if (snapshot.val()) {
                    console.log(snapshot.val())
                    setLocation(snapshot.val().location)
                    setDescription(snapshot.val().description)
                    setStory(snapshot.val().story)
                    setLoading(false)
                } else {
                    console.log("Error")
            
                }
            })
        }


        useEffect(()=>{
            // getPostById(route.params.id)

            getPostById(route.params.id)

        },[]);

       
   if(loading){
      return <EmptyContainer/>
   }
   else{
   return (<>
       <Text>
           {location}
       </Text>
       <Text>
           {description}
       </Text>
       </>)
   }
        
    
}


export default Read