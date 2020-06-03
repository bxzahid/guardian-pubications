import React from 'react'
import { withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Route from './Routes'

const App = ({ location }) => {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <Route location={location} />
            </CSSTransition>
        </TransitionGroup>
    )
}

export default withRouter(App)
