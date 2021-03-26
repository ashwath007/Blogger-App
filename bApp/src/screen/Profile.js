import React, { Component }  from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  import { Chip } from 'react-native-paper';
import {signOut} from '../action/auth'
import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {
    Header,
    Body,
    Right,
    Button,
    Icon,
    Title,

} from 'native-base'
const Profile = ({signOut, authState, navigation}) => {
    console.log(authState)
    const dataSource = [
        "Volvo", "Alpha Sports", "Ford", "Gräf & Stift", "Aston Martin", "BMW", "Tarrant Automobile","Push", "Österreichische Austro-Fiat", "Mazda", "Rosenbauer"
        ]
    return(
        <>
<View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: authState.user.image}}/>

                <Text style={styles.name}>{authState.user.name}</Text>
                <Text style={styles.userInfo}>{authState.user.bio}</Text>
                <Text style={styles.userInfo}>{authState.user.country}</Text>
            </View>
          </View>

         
      </View>
      <Text style={{color:'white',marginTop:12}}>
                  YOUR INTERESTS
              </Text>
      <View style={styles.body}>
           
              <View style={{flexDirection:'row',flexWrap:'wrap'}}>
{
 dataSource.map((item, index) => {
   return (
    <View style={{
    margin: 5,
    flexWrap: 'wrap',
    }}>
       <Chip
       key={index}
       mode="outlined" //changing display mode, default is flat.
       height={30} //give desirable height to chip
       textStyle={{ color:'black',fontSize: 15 }} //label properties
     
       >
      
      {item}
      </Chip>
  </View>
);
})}
</View>

          </View>
        </>
    )
}


const styles = StyleSheet.create({
    header:{
      backgroundColor: "#fff",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#DE4839",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#DE4839",
      height:500,
      flex:1,
      padding:20
   
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
    }
  });

const mapStateToProps = (state) => ({
    authState: state.auth
})

const mapDispatchToProps = {
    signOut
}

Profile.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(Profile);