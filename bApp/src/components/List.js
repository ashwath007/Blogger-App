import React, {useState, useEffect} from 'react';
import {Image, Linking,TouchableOpacity,StyleSheet,View,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import database from '@react-native-firebase/database';
import { Searchbar,H1 } from 'react-native-paper';

import moment from 'moment';

const List = ({item, userDetails, navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
   
  const viewCompany = (id) => {
    console.log(id);
  }
    return (
      <View>
      
          <View>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            
            <View >
              <TouchableOpacity onPress={() => viewCompany(item.id)}>
            <Container>
        <Content style={{padding:20}}>
          <Card style={{marginBottom:2}}>
            <CardItem>
              <Left>
              <CardItem cardBody>
              <Image source={{uri: item.picture}} style={{height: 150, width: null, flex: 1,borderRadius:12}}/>
            </CardItem>
              </Left>
              <Right>
                  <View style={{padding:8}}>
                  <Text style={{fontSize:18,fontWeight:'bold',marginBottom:6}}>
                      {item.cname}
                  </Text>
                    <Text style={{fontSize:14}}>
                   {item.description}
                    </Text>
                  </View>
                  
              </Right>
            </CardItem>
            
            <CardItem style={{backgroundColor:'#CAD5E2'}}>
              <Left>
               <Text style={{color:'white'}}>
                   {item.ctype}
               </Text>
              </Left>
              
              <Right>
                <Text style={{color:'white'}}>{item.headquarters}</Text>
              </Right>
            </CardItem>
       
         
          
          </Card>
        </Content>
      </Container>
      </TouchableOpacity>
            </View>
            
            </ScrollView>
          </View>
          </View>

       
    );
  
}


const styles = StyleSheet.create({
  searchBar:{
      backgroundColor:'#242B2E'
  },
  cmpTxt: {
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      alignSelf:'center',
      marginTop:33,
      marginBottom:12
  },
  searchView:{
      padding:20,
      marginBottom:23
  }
})

export default List