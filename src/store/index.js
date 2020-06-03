import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import book from './Book'
import books from './Books'
import category from './Category'
import categories from './Categories'
import videos from './Videos'
import readersComments from './ReadersComments'
import writer from './Writer'
import writers from './Writers'
import translator from './Translator'
import translators from './Translators'
import search from './Search'
import meta from './Meta'

const middleware =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...[thunk]))
        : applyMiddleware(...[thunk])

const store = createStore(
    combineReducers({
        book,
        books,
        category,
        categories,
        videos,
        readersComments,
        writer,
        writers,
        translator,
        translators,
        search,
        meta,
    }),
    middleware
)

export default store
