import React,{useState} from 'react';
import {View,Text,SafeAreaView,ScrollView,StyleSheet} from 'react-native'
import { Searchbar } from 'react-native-paper';

const Listing = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return(
        <SafeAreaView>
        <ScrollView>
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
            <View>

                
            </View>

            </ScrollView>
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


export default Listing;