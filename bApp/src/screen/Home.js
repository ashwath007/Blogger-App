import React, {useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Container, H1, Text} from 'native-base';
// redux
import {getPosts} from '../action/post';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

// to render empty container
import EmptyContainer from '../components/EmptyContainer';
import Post from '../components/Post';

const Home = ({getPosts, postState, userDetails}) => {
   
    useEffect(() => {
        getPosts()
    },[])    

    if(postState.loading){
        return <EmptyContainer/>
    }
    return(
     <SafeAreaView style={styles.container}>
         <FlatList
            data={postState.posts}
            keyExtractor = {(item) => item.id}
            renderItem={({item,index,separators})=>(
                <Post item={item} userDetails={userDetails} key={item.id}/>
            )}
            ListEmptyComponent={() => (
                <Container style={styles.emptyContainer}>
                  <H1>No post found</H1>
                </Container>
              )}
             >


         </FlatList>
     </SafeAreaView>
    )
}

Home.propTypes = {
    getPosts: propTypes.func.isRequired,
    postState: propTypes.object.isRequired,
    userDetails: propTypes.object

}

const mapStateToProps = (state) => ({
    postState: state.post,
    userDetails: state.auth.user
})

const mapDispatchToProps = {
    getPosts
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      justifyContent: 'flex-start',
      padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#1b262c',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default connect(mapStateToProps,mapDispatchToProps)(Home)