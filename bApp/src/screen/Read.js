import React,{useEffect,useState} from 'react'
import {View,Text,Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import database from '@react-native-firebase/database';
// import {getPostById} from '../action/post'
import EmptyContainer from '../components/EmptyContainer'
import {Right,Left,H3} from 'native-base'
import Tts from 'react-native-tts';
import { Button } from 'react-native-paper';
import { material,sanFranciscoSpacing,robotoWeights   } from 'react-native-typography'
const Read = ({route}) => {
    
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [readingStatus,setReadingStatus] = useState(false)
    const [story, setStory] = useState('')
    const [loading,setLoading] = useState(true)

        const readStory = async () => {
            setReadingStatus(true)
            try{
            Tts.getInitStatus().then(() => {
                const STORY = story
                console.log(STORY)
                Tts.speak(STORY, {
                    androidParams: {
                      KEY_PARAM_PAN: 0,
                      KEY_PARAM_VOLUME: 5,
                      KEY_PARAM_STREAM: 'STREAM_MUSIC',
                    },
                  })

              }, (err) => {
                if (err.code === 'no_engine') {
                  Tts.requestInstallEngine();
                }});
              Tts.addEventListener('tts-finish', (event) =>setReadingStatus(false));
            }
            catch(err){
                console.log(err)
                setReadingStatus(false)
            }
            //   Tts.setDucking(true);
            //   Tts.voices().then(voices => console.log(voices));
           
        }

        const stopStory = () => {
            Tts.stop();

            setReadingStatus(false)
        }
        const getPostById = (ID) => {
            setLoading(true)

            database()
            .ref(`/posts/${ID}`)
            .on('value', (snapshot) => {
                console.log('USER Data: ', snapshot.val())
                if (snapshot.val()) {
                    console.log(snapshot.val().picture)
                    setLocation(snapshot.val().location)
                    setDescription(snapshot.val().description)
                    setStory(snapshot.val().story)
                    setImage(snapshot.val().picture)
                    setAuthor(snapshot.val().by)
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
   return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{backgroundColor:'#fff'}}>
    {/* <View
            style={{ height: '50%', width: '100%',position: 'relative',backgroundColor:'black'}}
    
    >
    {console.log("Image",image)}

    <ImageBackground  
            source={{uri:image}}
            style={{height: '100%', width: '100%', flex: 1,opacity: 0.5}}
          />
    </View>  */}
    {/* <Image
        source={{uri:image}}
        style={{height:'30%',width:'100%'}}
    />
   */}
       {/* <Text style={{color:'#E21717', fontWeight:'bold'}}>
           {author}
       </Text> */}
       <View style={{padding:15,borderRadius:12}}>

        <View style={{padding:20,backgroundColor:'#EF5354',borderRadius:12}}>
        <Text
            style={{fontSize:8,fontSize: 20,color:'white',
                letterSpacing: sanFranciscoSpacing(34)}}
        >
           {description}
       </Text>
     
        </View>
        </View>
<View style={{alignItems:'center',marginTop:12}}>
    {!readingStatus ? (
            <Button onPress={()=>readStory()} icon="play" mode="contained">
            Read for me
          </Button>
    ) : (
        <Button onPress={()=>stopStory()} icon="play" mode="contained" loading>
        Stop
      </Button>

    )}

</View>
     <View style={{padding:20}}>

     <Text style={material.title}>
           {story}
       </Text>
     </View>
       </ScrollView>

      )
   }
        
    
}


export default Read