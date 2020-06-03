import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const CATEGORY = 'CATEGORY'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case CATEGORY:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadCategory = slug => async dispatch => {
    dispatch(setLoading(true))
    try {
        const { data } = await axios.get(`${config.API_URL}/categories/${slug}`)
        dispatch({
            type: CATEGORY,
            payload: data,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        if (e.response !== undefined) {
            dispatch({
                type: CATEGORY,
                payload: e.response.status,
            })
        }
    }
}
