import axios from 'axios'
import config from '../config'

// Actions
const WRITERS = 'WRITERS'

const init = {
    isLoading: false,
    writers: [],
}

// Reducer
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case WRITERS:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadWriters = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: WRITERS,
            payload: {
                isLoading: false,
                writers: data,
            },
        })
        return
    }

    dispatch({
        type: WRITERS,
        payload: {
            isLoading: true,
            writers: [],
        },
    })

    try {
        const {
            data: { writers },
        } = await axios.get(`${config.API_URL}/writers`)
        dispatch({
            type: WRITERS,
            payload: {
                isLoading: false,
                writers,
            },
        })
    } catch (e) {
        dispatch({
            type: WRITERS,
            payload: {
                isLoading: false,
                writers: [],
            },
        })
        console.error(e)
    }
}
