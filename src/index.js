import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'
import 'moment/locale/bn'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './styles/app.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.register()
