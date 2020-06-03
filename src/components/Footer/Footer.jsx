import React from 'react'
import PublicNotification from '../PublicNotification/PublicNotification'
import config from '../../config'

import "./Footer.scss"

const Footer = () => {
    const topFunction = e => {
        e.preventDefault()
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    const result = new Date()
    const fullDate = result.toLocaleDateString('bn')
    const year = fullDate.split('/')[2]
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col float-left mt-4 responsive-for-small-device">
                        <h1>গার্ডিয়ান পাবলিকেশন্স &copy; {year}</h1>
                    </div>
                    <div className="col float-right mt-4 d-flex justify-content-end">
                        <a
                            href={config.GUARDIAN_FB_PAGE}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span style={{ fontSize: '30px' }}>
                                <i className="fab fa-facebook-square"></i>
                            </span>
                        </a>
                        <span
                            onClick={topFunction}
                            id="scrollToTopBtn"
                            className="ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <PublicNotification />
        </footer>
    )
}

export default Footer
