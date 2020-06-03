import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const WRITER = 'WRITER'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case WRITER:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadWriter = slug => async dispatch => {
    dispatch(setLoading(true))
    try {
        const { data } = await axios.get(`${config.API_URL}/writers/${slug}`)
        dispatch({
            type: WRITER,
            payload: data,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        if (e.response !== undefined) {
            dispatch({
                type: WRITER,
                payload: e.response.status,
            })
        }
    }
}
