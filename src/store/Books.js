import axios from 'axios'
import config from '../config'

// Actions
const BOOKS = 'BOOKS'

const init = {
    isLoading: false,
    books: [],
}

// Reducer
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case BOOKS:
            return payload
        default:
            return state
    }
}

export default reducer

// Action Creators
export const loadBooks = data => async dispatch => {
    if (data.length > 0) {
        dispatch({
            type: BOOKS,
            payload: {
                isLoading: false,
                books: data,
            },
        })
        return
    }

    dispatch({
        type: BOOKS,
        payload: {
            isLoading: true,
            books: [],
        },
    })

    try {
        const {
            data: { books },
        } = await axios.get(`${config.API_URL}/books`)
        dispatch({
            type: BOOKS,
            payload: {
                isLoading: false,
                books,
            },
        })
    } catch (e) {
        dispatch({
            type: BOOKS,
            payload: {
                isLoading: false,
                books: [],
            },
        })
        console.error(e)
    }
}
