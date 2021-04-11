import React,{useState,useEffect} from 'react';
import {View,Image, TouchableOpacity} from 'react-native'
import moment from 'moment';

import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Text,
    H1,
    Button,
    H3,
    Textarea,
    Icon,
  } from 'native-base';
const SeeEpisodes = ({item}) => {
    return (
<View style={{marginBottom:18,backgroundColor:'#fff',padding:18}}>
    <View>
        <View>
            {/* video */}
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}>
                <Image source={{uri:item.userImage}} style={{width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    }}/>
            </View>
            <View style={{marginLeft:12}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>
                {item.title}
                </Text>
                <Text style={{fontSize:14,fontWeight:'200',color:'#758283'}}>
                {item.context}

                </Text>
            </View>
            <View style={{justifyContent:'center',marginLeft:23,flex:1}}>
                <Icon name="share-social-outline" style={{fontSize:18,alignSelf:'flex-end',position:'absolute'}}/>
            </View>
        </View>
        <View style={{flexDirection:'row'}}>

<Text style={{marginLeft:8,marginTop:6,fontSize:14,color:'#758283'}}>
{moment(item.date).format("MMM Do YY")}      |  

</Text>

<Text style={{marginLeft:8,marginTop:6,fontSize:14,color:'#758283'}}>
      {moment(item.date).fromNow()}

</Text>

        </View>
        <View style={{marginTop:12}}>
        <View
  style={{
    borderBottomColor: '#758283',
    borderBottomWidth: 0.50 ,
  }}
/>
        </View>
        <View>
        <Text style={{fontSize:15,fontWeight:'200',color:'#000',marginTop:12}}>
                {item.happening}

                </Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text style={{alignSelf:'center',fontWeight:'bold',color:'#E21717'}}>
                    See What happened ✌️ 
                </Text>
            </TouchableOpacity>
        </View>
    </View>
</View>
    )

}


export default SeeEpisodes;