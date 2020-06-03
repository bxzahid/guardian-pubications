import React from 'react'
import { Link } from 'react-router-dom'
import DefaultBookImage from '../../../assets/images/default-book-image.png'

import './FindOutNextBookCard.scss'

const FindOutNextBookCard = ({ slug, thumbnail, name, writers }) => {
    return (
        <div className="find-out-next-book-card">
            <Link to={`/books/${slug}`}>
                <img
                    className="img-fluid img-center-for-extra-small-device"
                    src={thumbnail === undefined ? DefaultBookImage : thumbnail}
                    alt=""
                />
                <h5 className="book-name  mt-4">{name}</h5>
                <p className="book-author mt-3 mb-4">
                    {writers.length ? writers[0].name : '-'}
                </p>
            </Link>
        </div>
    )
}

export default FindOutNextBookCard
