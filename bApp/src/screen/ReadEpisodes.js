import React,{useEffect,useState,useCallback} from 'react';
import {View,Text,Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import {Right,Left,H3,  Fab,Icon,Container,Button} from 'native-base'

import EmptyContainer from '../components/EmptyContainer';
import database from '@react-native-firebase/database';
import { material ,human } from 'react-native-typography'
import YoutubePlayer from "react-native-youtube-iframe";




const ReadEpisodes = ({route}) => {
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
        }
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);
    
    

    const [video,setVideo] = useState('');
    const [title,setTitle] = useState('');

    const [happening,setHappening] = useState('');
    const [loading,setLoading] = useState('');
    const [videoBtn,setVideoBtn] = useState(false);



    const getEpisode = (ID) => {
        setLoading(true)

        database()
        .ref(`/episode/${ID}`)
        .on('value', (snapshot) => {
            console.log('USER Data: ', snapshot.val().vote)
            if (snapshot.val()) {
                console.log(snapshot.val().picture)
                setVideo(snapshot.val().ylink)
                setHappening(snapshot.val().happening)
                setTitle(snapshot.val().title)

                setLoading(false)
            } else {
                console.log("Error")
        
            }
        })
    }
   
    useEffect(() => {
        getEpisode(route.params.id)
    }, [])


    const changeShowVideo = () => {
        const sta = !videoBtn;
        setVideoBtn(sta)
    }


    const showVideo = () => {
        return(
            <View>
            <YoutubePlayer
          height={200}
          play={playing}
          videoId={video}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            </View>
        )
    }
    if(loading){
        return <EmptyContainer />
    }
    else{
    return(
        <Container>
      <ScrollView style={{backgroundColor:'#FFF8D3'}}>
       
        <View>
        {videoBtn ? (
            showVideo()
        ): (
            null
        )}

<View style={{marginTop:22,marginLeft:25}}>

               
<Text style={{color:'#737373',fontSize:32,fontWeight:'bold',textDecorationLine: 'underline',textDecorationColor:'#FF0000',fontFamily:'sans-serif-medium',marginBottom:12}}>
    {title}
</Text>

</View>
<View style={{alignItems:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={() => changeShowVideo()} style={{backgroundColor:'#fff',padding:8,borderRadius:8,marginLeft:12,marginTop:3}}>
                <Text style={{color:'#000'}}>
                    Show Video
                </Text>
            </TouchableOpacity>
        </View>
            <View style={{alignItems:'center',padding:30}}>
               
        
            <Text style={{fontFamily:'serif',fontSize:18}}>
                {happening}
            </Text>
            </View>
            
        </View>
        </ScrollView>
        </Container>

    )
    }
}

export default ReadEpisodes;