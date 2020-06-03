import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const BOOK = 'BOOK'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case BOOK:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadBook = slug => async dispatch => {
    dispatch(setLoading(true))
    try {
        const { data } = await axios.get(`${config.API_URL}/books/${slug}`)
        dispatch({
            type: BOOK,
            payload: data,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        if (e.response !== undefined) {
            dispatch({
                type: BOOK,
                payload: e.response.status,
            })
        }
    }
}
