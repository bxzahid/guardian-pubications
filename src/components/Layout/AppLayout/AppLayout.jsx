import React from 'react'

import Header from '../../Header/AppHeader/AppHeader'
import Footer from '../../Footer/Footer'

import "./AppLayout.scss"

const AppLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content-wrapper pt-for-header-fixed-reason">
                    {children}
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AppLayout
