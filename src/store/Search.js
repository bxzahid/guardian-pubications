import axios from 'axios'
import { setLoading } from './Meta'
import config from '../config'
import debounce from 'lodash.debounce'

// Actions
const SEARCH = 'SEARCH'

// Reducer
const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case SEARCH:
            return payload
        default:
            return state
    }
}

export default reducer

let callAPI = {}

// Action Creators
export const loadSearchResult = query => dispatch => {
    callAPI.cancel && callAPI.cancel()

    callAPI = debounce(async () => {
        dispatch(setLoading(true))
        try {
            const {
                data: {
                    success: { books },
                },
                status,
            } = await axios.get(`${config.API_URL}/search?key=${query}`)

            dispatch({
                type: SEARCH,
                payload: {
                    data: books,
                    status: status,
                },
            })

            dispatch(setLoading(false))
        } catch (e) {
            dispatch(setLoading(false))
            if (e.response !== undefined) {
                dispatch({
                    type: SEARCH,
                    payload: {
                        status: e.response.status,
                    },
                })
            }
        }
    }, 1000)

    callAPI()
}

export const removeSearchResult = () => {
    return {
        type: SEARCH,
        payload: [],
    }
}
