// Actions
const LOADING = 'LOADING'

// Reducer
const init = {
    isLoading: false,
}

const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOADING: {
            return {
                isLoading: payload.isLoading,
            }
        }
        default:
            return state
    }
}

export default reducer

// Action Creators
export const setLoading = loadingState => ({
    type: LOADING,
    payload: { isLoading: loadingState },
})

