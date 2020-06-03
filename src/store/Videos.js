import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const VIDEO = 'VIDEO'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case VIDEO:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadVideos = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: VIDEO,
            payload: data,
        })
        return
    }

    dispatch(setLoading(true))

    try {
        const {
            data: { videos },
        } = await axios.get(`${config.API_URL}/videos`)
        dispatch({
            type: VIDEO,
            payload: videos,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        console.error(e)
    }
}
