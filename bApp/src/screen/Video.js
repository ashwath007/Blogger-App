import React,{useEffect,useState} from 'react'
import {StyleSheet, ScrollView, Image,View} from 'react-native';
import {getEpisode} from '../action/episode';
import {connect} from 'react-redux';

import propTypes from 'prop-types';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  H3,
  Textarea,
  Icon,
} from 'native-base';


import AdaptiveCard from 'react-native-adaptivecards';
import EmptyContainer from '../components/EmptyContainer';



const Video = ({getEpisode, postState, userDetails,navigation}) => {


  useEffect(() => {
    getEpisode()
},[])    

    console.log(postState)
  if(postState.loading){
    return <EmptyContainer/>
}else{
  {console.log("Here : ",postState.episode)}
    return(
        <Content padder>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor:'#EEEEEE'}}>
          <Text>
hnihgbouhb
            </Text>
        </View>


        </ScrollView>
        </Content>
    )
}
}
const mapStateToProps = (state) => ({
  postState: state.episode,
  userDetails: state.auth.user
})

const mapDispatchToProps = {
  getEpisode
}

export default connect(mapStateToProps,mapDispatchToProps)(Video)