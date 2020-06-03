import React from 'react'
import { useSelector } from 'react-redux'

import "./ReadersCommentsSlider.scss"

const ReadersCommentsSlider = () => {
    const data = useSelector(({ readersComments }) => readersComments)
    return (
        <section className="readers-comments-slider">
            {data.length > 0 && (
                <div className="section-padding-top-bottom">
                    <h2 className="section-title">পাঠকদের মন্তব্য</h2>
                    <div
                        id="carouselExampleIndicators3"
                        className="carousel slide"
                        data-ride="carousel"
                        data-interval="1950"
                    >
                        <ol className="carousel-indicators">
                            {data.map(({ id }, index) => (
                                <li
                                    key={id}
                                    data-target="#carouselExampleIndicators3"
                                    data-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                ></li>
                            ))}
                        </ol>
                        <div className="carousel-inner">
                            {data.map(
                                (
                                    { id, comment, image, name, designation },
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
                                        <div className="slider-content">
                                            <p className="message">{comment}</p>
                                            <div className="reader-details">
                                                <div className="row">
                                                    <div className="col text-right">
                                                        <img
                                                            src={image}
                                                            alt=""
                                                            className="img border"
                                                        />
                                                    </div>
                                                    <div className="col text-left">
                                                        <h6>{name}</h6>
                                                        <p>{designation}</p>
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
                            href="#carouselExampleIndicators3"
                            role="button"
                            data-slide="prev"
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="#5f6368"
                            >
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                                <path fill="none" d="M0 0h24v24H0V0z" />
                            </svg>{' '}
                            <i className="fas fa-chevron-left"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators3"
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
            )}
        </section>
    )
}

export default ReadersCommentsSlider
