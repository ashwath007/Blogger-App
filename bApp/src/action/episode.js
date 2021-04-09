import database from '@react-native-firebase/database';
import { SET_EPISODE, ERROR_EPISODE } from './action.types'

export const getEpisode = () => async(dispatch) => {

    try {
        database()
            .ref('/listing/')
            .on('value', (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val()) {
                    dispatch({
                        type: SET_LISTING,
                        payload: Object.values(snapshot.val())
                    })
                } else {
                    dispatch({
                        type: SET_LISTING,
                        payload: []
                    })
                }

            })
    } catch (err) {
        dispatch({
            type: ERROR_LISTING,

        })

    }
}