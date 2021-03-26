import React,{useEffect,useState} from 'react'
import {View,Text,Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import database from '@react-native-firebase/database';
// import {getPostById} from '../action/post'
import EmptyContainer from '../components/EmptyContainer'
import {Right,Left,H3,  Fab,Icon,Container} from 'native-base'
import Tts from 'react-native-tts';
import { Button } from 'react-native-paper';
import { material,sanFranciscoSpacing,robotoWeights} from 'react-native-typography'
const Read = ({route}) => {
    
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [readingStatus,setReadingStatus] = useState(false)
    const [story, setStory] = useState('')
    const [uid, setUid] = useState('')
    const [numberOfHearts, setNumberOfHearts] = useState([])


    const [loading,setLoading] = useState(true)
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)

    useEffect(() => {
        console.log(numberOfHearts)
  
        if (numberOfHearts) {
          let upVote = 0
          let downVote = 0
  
          Object.values(numberOfHearts).map((val) => {
                       if (val.upvote) {
              upVote += 1
            }
            
          })
  
          setUpvote(upVote)
          
 
        }
    }, [numberOfHearts])
        const giveClaps = () => {
            database()
            .ref(`/posts/${route.params.id}/vote/${uid}`)
            .set({
              upvote: 1
            })
            .then(() => console.log('UPVOTED'))
        }

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
                console.log('USER Data: ', snapshot.val().vote)
                if (snapshot.val()) {
                    console.log(snapshot.val().picture)
                    setLocation(snapshot.val().location)
                    setDescription(snapshot.val().description)
                    setStory(snapshot.val().story)
                    setImage(snapshot.val().picture)
                    setAuthor(snapshot.val().by)
                    setNumberOfHearts(snapshot.val().vote)
                    setUid(snapshot.val().userId)
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
    <Container>
      <ScrollView style={{backgroundColor:'#fff'}}>
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
       <View style={{alignItems:'center',padding:20}}>
       <View style={{marginTop:12,backgroundColor:'white',padding:2,borderRadius:4}}>
       <Text style={{fontWeight:'bold'}}>
            {upvote} Claps
       </Text>
       </View>
        </View>
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
        <Image
                style={{height:200,width:350,borderRadius:12}}
                source={{uri:image}}
        />
    </View>
     <View style={{padding:20}}>

     <Text style={material.title}>
           {story}
       </Text>
     </View>
  
       </ScrollView>
    
       <Fab style={{backgroundColor:'#fff'}}
           position="bottomRight"
           onPress={() => giveClaps()}
       > 
       
     <Icon name='heart' style={{fontSize: 30, color: 'red'}}/>
       </Fab>
       </Container>
      )
   }
        
    
}


export default Read