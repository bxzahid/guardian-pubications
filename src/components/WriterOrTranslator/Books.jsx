import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import Rating from 'react-rating'
import DefaultBookImage from '../../assets/images/default-book-image.png'

import './Books.scss'

const Books = ({ data }) => {
    const { name, books } = data

    return (
        <section className="single-writter-area">
            {books && books.length > 0 && (
                <div className="single-writter">
                    <div className="custom-container">
                        <h2>{name}-র বই সমূহ</h2>

                        <div className="row row-content">
                            {books &&
                                books.map(
                                    ({
                                        id,
                                        slug,
                                        bookImg,
                                        bookName,
                                        price,
                                        ratings,
                                    }) => (
                                        <div
                                            key={id}
                                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                                        >
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
                                                    <img
                                                        className="img-fluid"
                                                        src={
                                                            bookImg ===
                                                            undefined
                                                                ? DefaultBookImage
                                                                : bookImg
                                                        }
                                                        alt=""
                                                    />
                                                </Lazyload>
                                            </Link>
                                            <h5>{bookName}</h5>
                                            <p className="icon">
                                                <Rating
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    initialRating={ratings}
                                                    fractions={2}
                                                    readonly="true"
                                                />
                                            </p>
                                            <p>মুল্যঃ {price} টাকা</p>
                                            <Link to={`/book/${slug}`}>
                                                <Button>বইটি দেখুন</Button>
                                            </Link>
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Books
