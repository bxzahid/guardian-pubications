import axios from 'axios'
import config from '../config'

// Actions
const TRANSLATORS = 'TRANSLATORS'

const init = {
    isLoading: false,
    translators: [],
}

// Reducer
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case TRANSLATORS:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadTranslators = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: TRANSLATORS,
            payload: {
                isLoading: false,
                translators: data,
            },
        })
        return
    }
    
    dispatch({
        type: TRANSLATORS,
        payload: {
            isLoading: true,
            translators: [],
        },
    })

    try {
        const {
            data: { translators },
        } = await axios.get(`${config.API_URL}/translators`)
        dispatch({
            type: TRANSLATORS,
            payload: {
                isLoading: false,
                translators,
            },
        })
    } catch (e) {
        dispatch({
            type: TRANSLATORS,
            payload: {
                isLoading: false,
                translators: [],
            },
        })
        console.error(e)
    }
}
