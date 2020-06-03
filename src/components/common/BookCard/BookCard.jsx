import React from 'react'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'

import "./BookCard.scss"

const BookCard = ({ id, image, name, author }) => {
    return (
        <>
            <Lazyload
                key={id}
                height={100}
                offset={[-100, 100]}
                placeholder={<Skeleton width={168} height={240} />}
            >
                <img
                    className="img-fluid img-center-for-extra-small-device"
                    src={image}
                    alt=""
                />
            </Lazyload>
            <h5 className="book-name  mt-4">{name}</h5>
            <p className="book-author mt-3 mb-4">{author}</p>
        </>
    )
}
export default BookCard
