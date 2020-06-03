import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import Rating from 'react-rating'
import DefaultBookImage from '../../assets/images/default-book-image.png'

import './Books.scss'

const Books = () => {
    const data = useSelector(({ category }) => category)
    const { books } = data
    return (
        <section className="single-category">
            <div className="custom-container">
                <div className="row row-content">
                    {books &&
                        books.map(({ id, slug, image, name, price }) => (
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
                                                image === undefined
                                                    ? DefaultBookImage
                                                    : image
                                            }
                                            alt=""
                                        />
                                    </Lazyload>
                                </Link>
                                <h5>{name}</h5>
                                <p className="icon">
                                    {/* FIXME: Not found rating from api */}
                                    <Rating
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        initialRating={2}
                                        fractions={2}
                                        readonly="true"
                                    />
                                </p>
                                <p>মূল্যঃ {price} টাকা</p>
                                <Link to={`/book/${slug}`}>
                                    <Button>বইটি দেখুন</Button>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Books
