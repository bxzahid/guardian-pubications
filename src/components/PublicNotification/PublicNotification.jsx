import React, { useEffect } from 'react'

import "./PublicNotification.scss"

const PublicNotification = () => {
    useEffect(() => {
        var notificationStatus = sessionStorage.getItem('notificationStatus')
        if (notificationStatus === 'hide') {
            document.getElementById('notification-box').style.display = 'none'
        }
    }, [])
    const hideNotification = () => {
        sessionStorage.setItem('notificationStatus', 'hide')
        document.getElementById('notification-box').style.display = 'none'
    }
    return (
        <div className="notification" id="notification-box">
            <div className="container">
                <div className="row">
                    <div className="mr-auto">
                        এই সাইটের বেটা টেস্টিং চলছে...
                    </div>
                    <div className="ml-auto" onClick={hideNotification}>
                        <button type="button" className="link-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicNotification
