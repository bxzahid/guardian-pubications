import axios from 'axios'
import config from '../config'
import { setLoading } from './Meta'

// Actions
const TRANSLATOR = 'TRANSLATOR'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case TRANSLATOR:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadTranslator = id => async dispatch => {
    dispatch(setLoading(true))
    try {
        const { data } = await axios.get(`${config.API_URL}/translators/${id}`)
        dispatch({
            type: TRANSLATOR,
            payload: data,
        })
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        if (e.response !== undefined) {
            dispatch({
                type: TRANSLATOR,
                payload: e.response.status,
            })
        }
    }
}
