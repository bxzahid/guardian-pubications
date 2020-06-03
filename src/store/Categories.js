import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const CATEGORIES = 'CATEGORIES'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case CATEGORIES:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadCategories = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: CATEGORIES,
            payload: data,
        })
        return
    }

    dispatch(setLoading(true))

    try {
        const {
            data: { categories },
        } = await axios.get(`${config.API_URL}/categories`)
        dispatch({
            type: CATEGORIES,
            payload: categories,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        console.error(e)
    }
}
