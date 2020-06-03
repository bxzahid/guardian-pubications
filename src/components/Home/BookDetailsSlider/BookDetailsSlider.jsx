import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Rating from 'react-rating'
import ReactHtmlParser from 'react-html-parser'
import DefaultBookImage from '../../../assets/images/default-book-image.png'

import './BookDetailsSlider.scss'

const BookDetailsSlider = () => {
    const { books } = useSelector(({ books }) => books)
    const featuredBooks =
        books !== undefined && books.filter(item => item.featured === true)

    return (
        <div className="display-hide-for-mobile-device">
            {featuredBooks.length > 0 && (
                <section className="book-details-slider d-flex align-items-center pb-1">
                    <div className="custom-container">
                        <div
                            id="carouselExampleIndicators2"
                            className="carousel slide"
                            data-interval="1950"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                {books !== undefined &&
                                    books
                                        .slice(0, 3)
                                        .map(({ id }, index) => (
                                            <li
                                                data-target="#carouselExampleIndicators2"
                                                data-slide-to={index}
                                                className={
                                                    index === 0 ? 'active' : ''
                                                }
                                                key={id}
                                            ></li>
                                        ))}
                            </ol>
                            <div className="carousel-inner">
                                {featuredBooks.map(
                                    (
                                        {
                                            id,
                                            slug,
                                            thumbnail,
                                            name,
                                            description,
                                            price,
                                            writers,
                                        },
                                        index
                                    ) => (
                                        <div
                                            className={
                                                index === 0
                                                    ? 'carousel-item active'
                                                    : 'carousel-item'
                                            }
                                            key={id}
                                        >
                                            <div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-6 text-right p-5 image">
                                                        <Link
                                                            to={`/books/${slug}`}
                                                        >
                                                            <img
                                                                src={
                                                                    thumbnail ===
                                                                    undefined
                                                                        ? DefaultBookImage
                                                                        : thumbnail
                                                                }
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-6 content-area d-flex align-items-center">
                                                        <div>
                                                            <h5>
                                                                {writers.length
                                                                    ? writers[0]
                                                                          .name
                                                                    : '-'}
                                                            </h5>
                                                            <h4>{name}</h4>
                                                            <div className="details mb-2">
                                                                {ReactHtmlParser(
                                                                    description
                                                                        .split(
                                                                            ' '
                                                                        )
                                                                        .slice(
                                                                            0,
                                                                            25
                                                                        )
                                                                        .join(
                                                                            ' '
                                                                        )
                                                                )}
                                                            </div>
                                                            <p className="star-icon">
                                                                <Rating
                                                                    emptySymbol="far fa-star"
                                                                    fullSymbol="fas fa-star"
                                                                    initialRating={
                                                                        2
                                                                    }
                                                                    fractions={
                                                                        2
                                                                    }
                                                                    readonly="true"
                                                                />
                                                            </p>
                                                            <p className="price">
                                                                মূল্যঃ {price}{' '}
                                                                টাকা
                                                            </p>
                                                            <Link
                                                                to={`/books/${slug}`}
                                                            >
                                                                <div className="btn-area">
                                                                    <Button>
                                                                        বইটি
                                                                        দেখুন
                                                                    </Button>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    fill="#5f6368"
                                >
                                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="41"
                                    height="41"
                                    viewBox="0 0 24 24"
                                    fill="#5f6368"
                                >
                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default BookDetailsSlider
