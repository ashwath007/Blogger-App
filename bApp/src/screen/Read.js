import React from 'react'
import {View,Text} from 'react-native'



const Read = ({route}) => {
    return(
        <View>
            <Text>
                Read {route.params.id}
            </Text>
        </View>
    )
}


export default Read