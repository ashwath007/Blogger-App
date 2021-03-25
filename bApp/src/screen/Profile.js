import React from 'react'

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
    Text
} from 'native-base'
const Profile = ({signOut, authState, navigation}) => {
    return(
        <Header
        androidStatusBarColor="#0f4c75"
        style={{
            backgroundColor: "#E21717"
        }}
        >
        <Body>
            <Title>Startup LIFE</Title>
        </Body>
        <Right>
            {authState.isAuthenticated && (
                <>
                <Button
                transparent
                iconLeft
                onPress={() => navigation.navigate('AddPost')}
                >
                <Text style={{color: '#fdcb9e'}}>Add Post</Text>
                </Button>
                <Button
                transparent
                onPress={() => signOut()}
                >
                    <Icon name="log-out-outline" style={{color: "red"}} />
                </Button>
                </>
            )}
        </Right>
        </Header>
    )
}

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