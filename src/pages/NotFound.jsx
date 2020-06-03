import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 0,
            flexDirection: 'column',
        }}
        className="text-center"
    >
        <div>
            <h3>পেজ খুঁজে পাওয়া যায়নি!</h3>
            <div className="pt-2">
                <Link to="/">
                    <button className="btn btn-primary">হোম পেজ</button>
                </Link>
            </div>
        </div>
    </div>
)
export default NotFoundPage
