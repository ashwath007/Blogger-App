import React,{useState,useEffect} from 'react';
import {View,SafeAreaView,ScrollView,StyleSheet,Image,FlatList} from 'react-native'
import { Searchbar,H1 } from 'react-native-paper';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {getListing} from '../action/listing';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import List from '../components/List';
import EmptyContainer from '../components/EmptyContainer';




const Listing = ({getListing, postState,navigation,userDetails}) => {


  useEffect(() => {
    getListing()
  }, [])
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    if(postState.loading){
      return <EmptyContainer/>
  }
    return(
 
        <SafeAreaView>
          {console.log(postState)}
         <FlatList
    
            data={postState.listing}
            keyExtractor = {(item) => item.id}
            renderItem={({item,index,separators})=>(
              
               <List item={item} userDetails={userDetails} key={item.id} navigation={navigation}/>
            )}
            ListEmptyComponent={() => (
                <Container style={styles.emptyContainer}>
                  <H1>No post found</H1>
                </Container>
              )}
             >


         </FlatList>















        {/* <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.searchBar}>
                    <Text style={styles.cmpTxt}>
                        Company Listing
                    </Text>
                    <Text style={{color:'white',fontSize:12,alignSelf:'center'}}>
                        A List Of Compaines Curated by Startup LIFE Media
                    </Text>
                    <View style={styles.searchView}>
                    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
                    </View>
            </View>
            <View >
            <Container>
        <Content style={{padding:20}}>
          <Card style={{marginBottom:23}}>
            <CardItem>
              <Left>
              <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1611095784205-cdebfe7e644d?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={{height: 150, width: null, flex: 1,borderRadius:12}}/>
            </CardItem>
              </Left>
              <Right>
                  <View style={{padding:8}}>
                  <Text style={{fontSize:24,fontWeight:'bold',marginBottom:6}}>
                      Yulu
                  </Text>
                    <Text style={{fontSize:14}}>
                    React Native WebView is a modern, well-supported, and cross-platform WebView for React Native. 
                    </Text>
                  </View>
                  
              </Right>
            </CardItem>
            
            <CardItem style={{backgroundColor:'#CAD5E2'}}>
              <Left>
               <Text style={{color:'white'}}>
                   Enterprise Tech, SaaS
               </Text>
              </Left>
              
              <Right>
                <Text style={{color:'white'}}>Puna</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{marginBottom:23}}>
            <CardItem>
              <Left>
              <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1611095784205-cdebfe7e644d?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={{height: 150, width: null, flex: 1,borderRadius:12}}/>
            </CardItem>
              </Left>
              <Right>
                  <View style={{padding:8}}>
                  <Text style={{fontSize:24,fontWeight:'bold',marginBottom:6}}>
                      Yulu
                  </Text>
                    <Text style={{fontSize:14}}>
                    React Native WebView is a modern, well-supported, and cross-platform WebView for React Native. 
                    </Text>
                  </View>
                  
              </Right>
            </CardItem>
            
            <CardItem style={{backgroundColor:'#CAD5E2'}}>
              <Left>
               <Text style={{color:'white'}}>
                   Enterprise Tech, SaaS
               </Text>
              </Left>
              
              <Right>
                <Text style={{color:'white'}}>Puna</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{marginBottom:23}}>
            <CardItem>
              <Left>
              <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1611095784205-cdebfe7e644d?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={{height: 150, width: null, flex: 1,borderRadius:12}}/>
            </CardItem>
              </Left>
              <Right>
                  <View style={{padding:8}}>
                  <Text style={{fontSize:24,fontWeight:'bold',marginBottom:6}}>
                      Yulu
                  </Text>
                    <Text style={{fontSize:14}}>
                    React Native WebView is a modern, well-supported, and cross-platform WebView for React Native. 
                    </Text>
                  </View>
                  
              </Right>
            </CardItem>
            
            <CardItem style={{backgroundColor:'#CAD5E2'}}>
              <Left>
               <Text style={{color:'white'}}>
                   Enterprise Tech, SaaS
               </Text>
              </Left>
              
              <Right>
                <Text style={{color:'white'}}>Puna</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
            </View>
            </ScrollView> */}
            </SafeAreaView>
    )
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


Listing.propTypes = {
  getListing: propTypes.func.isRequired,
  postState: propTypes.object.isRequired,
  userDetails: propTypes.object

}

const mapStateToProps = (state) => ({
  postState: state.listing,
  userDetails: state.auth.user
})

const mapDispatchToProps = {
  getListing
}


export default connect(mapStateToProps,mapDispatchToProps)(Listing)