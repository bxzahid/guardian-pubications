import axios from 'axios'
import { setLoading } from './Meta'
import config from '../config'

// Actions
const READERS_COMMENTS = 'LOAD_READERS_COMMENT'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case READERS_COMMENTS:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadReadersComments = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: READERS_COMMENTS,
            payload: data,
        })
        return
    }

    dispatch(setLoading(true))

    try {
        const { data } = await axios.get(`${config.API_URL}/feedbacks`)
        dispatch({
            type: READERS_COMMENTS,
            payload: data,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        console.error(e)
    }
}
