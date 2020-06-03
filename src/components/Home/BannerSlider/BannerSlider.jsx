import React from 'react'

import "./BannerSlider.scss"

const BannerSlider = () => {
    const data = [
        {
            id: 1585282,
            img: require('../../../assets/images/banner.svg'),
        },
        {
            id: 2874175,
            img: require('../../../assets/images/banner.svg'),
        },
        {
            id: 3869326,
            img: require('../../../assets/images/banner.svg'),
        },
    ]

    return (
        <section className="banner-slider-area">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                data-interval="1950"
            >
                <ol className="carousel-indicators">
                    {data.map(({ id }, index) => (
                        <li
                            key={id}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {data.map(({ id, img }, index) => (
                        <div
                            key={id}
                            className={
                                index === 0
                                    ? 'carousel-item active'
                                    : 'carousel-item'
                            }
                        >
                            <img src={img} className="d-block" alt="" />
                        </div>
                    ))}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                        <path fill="none" d="M0 0h24v24H0V0z" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        <path fill="none" d="M0 0h24v24H0V0z" />
                    </svg>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}

export default BannerSlider
