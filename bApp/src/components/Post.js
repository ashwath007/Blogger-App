import React, {useState, useEffect} from 'react';
import {Image, Linking,View} from 'react-native';
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



const Post = ({item, userDetails}) => {

    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)

    useEffect(() => {
      console.log(item)

      if (item.vote) {
        let upVote = 0
        let downVote = 0

        Object.values(item.vote).map((val) => {
          if (val.upvote) {
            upVote += 1
          }

          if (val.downvote) {
            downVote += 1
          }
        })

        setUpvote(upVote)
        setDownvote(downVote)
      }


    }, [item])

    const upVotePost = () => {
      database()
        .ref(`/posts/${item.id}/vote/${userDetails.uid}`)
        .set({
          upvote: 1
        })
        .then(() => console.log('UPVOTED'))
    }

    const downVotePost = () => {
      database()
        .ref(`/posts/${item.id}/vote/${userDetails.uid}`)
        .set({
          downvote: 1
        })
        .then(() => console.log('DOWNVOTED'))
    }

    

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
        {/* <CardItem
          style={{
            backgroundColor: 'transparent',
          }}>
          <Left>
            <Thumbnail source={{uri: item.userImage}} small />
            <Body>
              <Text
                style={{
                  color: '#fdcb9e',
                }}>
                {item.by}
              </Text>
  
              <Text note>{item.location}</Text>
            </Body>
          </Left>
        </CardItem> */}
        <CardItem cardBody>
          <Image
            source={{uri: item.picture}}
            style={{height: 200, width: null, flex: 1,borderTopRightRadius:12}}
          />
          
        </CardItem>
        <CardItem
          cardBody
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#000',
              marginLeft:8
            }}>
            {item.description}
          </Text>
          {/* <Text styel={{color:'black'}}>
               By - {item.userName}
          </Text> */}
        </CardItem>
  
        <CardItem
          style={{
            backgroundColor: '#fff',
            borderRadius:12
          }}>
          <Left>
            <Button transparent onPress={upVotePost}>
              <Icon
                name="thumbs-up"
                type="Entypo"
                style={{fontSize: 20, color: '#fdcb9e'}}
              />
              <Text
                style={{
                  color: '#fdcb9e',
                }}>
                {upvote}
              </Text>
            </Button>
            <Button transparent onPress={downVotePost}>
              <Icon
                name="thumbs-down"
                type="Entypo"
                style={{fontSize: 20, color: '#fdcb9e'}}
              />
              <Text
                style={{
                  color: '#fdcb9e',
                }}>
                 {downvote}
              </Text>
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              iconLeft
              onPress={() => {
                Linking.openURL(`instagram://user?username=${item.instaId}`);
              }}>
              <Text
                style={{
                  color: '#000',
                }}>
                Read Article
              </Text>
              {/* <Icon
                name="instagram"
                type="Feather"
                style={{fontSize: 20, color: '#fdcb9e'}}
              /> */}
            </Button>
          </Right>
        </CardItem>
      </Card>
      </View>
    );
  
}

export default Post