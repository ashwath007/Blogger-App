import React, {useState, useEffect} from 'react';
import {Image, Linking,TouchableOpacity,View} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import database from '@react-native-firebase/database';

import moment from 'moment';

const List = ({item, userDetails, navigation}) => {


   

    return (
      <View style={{padding:12}}>
      <Card
        style={{
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          elevation: 5,
          borderRadius:12,
        }}>
      
    
        <CardItem
          cardBody
          style={{
            backgroundColor: 'transparent',padding:7,marginTop:8
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#000',
              marginLeft:8,
              fontSize:15
            }}>
             
            {item.cname}
          </Text>
          {/* <Text styel={{color:'black'}}>
               By - {item.userName}
          </Text> */}
        </CardItem>
  
       
    
      </Card>
      </View>
    );
  
}

export default List