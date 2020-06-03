import React from 'react'

import Header from '../../Header/SinglePageAppHeader/SinglePageAppHeader'
import Footer from '../../Footer/Footer'

import "./SinglePageAppLayout.scss"

const SinglePageAppLayout = ({ children }) => {
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

export default SinglePageAppLayout
