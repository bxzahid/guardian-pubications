import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import Rating from 'react-rating'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import ReactHtmlParser from 'react-html-parser'
import DefaultBookImage from '../../../assets/images/default-book-image.png'

import './BookDetailsList.scss'

const BookDetailsList = () => {
    const { books } = useSelector(({ books }) => books)

    const featuredBooks =
        books !== undefined && books.filter(item => item.featured === true)
    return (
        <section className="books-details-list">
            <div className="custom-container">
                <div className="row single-row">
                    {featuredBooks.map(
                        ({
                            id,
                            slug,
                            thumbnail,
                            short_title,
                            name,
                            description,
                            price,
                        }) => (
                            <div className="col-md-6 mb-5 m-auto-rs" key={id}>
                                <div className="row justify-content-center">
                                    <Link to={`/books/${slug}`}>
                                        <Lazyload
                                            key={id}
                                            height={100}
                                            offset={[-100, 100]}
                                            placeholder={
                                                <Skeleton
                                                    width={168}
                                                    height={240}
                                                />
                                            }
                                        >
                                            <div className="image">
                                                <img
                                                    src={
                                                        thumbnail === undefined
                                                            ? DefaultBookImage
                                                            : thumbnail
                                                    }
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </Lazyload>
                                    </Link>

                                    <div className="content-area d-flex align-items-center">
                                        <div>
                                            {short_title && (
                                                <h5>{short_title}</h5>
                                            )}
                                            <h4>{name}</h4>
                                            <div className="details">
                                                {ReactHtmlParser(
                                                    description
                                                        .split(' ')
                                                        .slice(0, 25)
                                                        .join(' ')
                                                )}
                                            </div>
                                            <p className="star-icon mt-2">
                                                <Rating
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    initialRating={4}
                                                    fractions={2}
                                                    readonly="true"
                                                />
                                            </p>
                                            <p className="price">
                                                মূল্যঃ {price} টাকা
                                            </p>
                                            <Link to={`/books/${slug}`}>
                                                <div className="btn-area">
                                                    <Button>বইটি দেখুন</Button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default BookDetailsList
