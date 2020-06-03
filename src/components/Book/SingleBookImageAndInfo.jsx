import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Rating from 'react-rating'
import Skeleton from 'react-loading-skeleton'
import DefaultBookImage from '../../assets/images/default-book-image.png'

import './SingleBookImageAndInfo.scss'

const SingleBookImageAndInfo = () => {
    const { isLoading } = useSelector(({ meta }) => meta)
    const data = useSelector(({ book }) => book)

    const {
        slug,
        image,
        name,
        publish_year,
        cover_designer,
        edition,
        price,
        writers,
        categories,
        status,
    } = data

    return (
        <section className="book-home">
            <div className="book-home-container">
                <div className="row d-flex align-items-center display-100-vh">
                    <div className="book-home-img">
                        {isLoading ? (
                            <Skeleton width={245} height={360} />
                        ) : (
                            <img
                                src={
                                    image === undefined
                                        ? DefaultBookImage
                                        : image
                                }
                                alt=""
                            />
                        )}
                    </div>
                    <div className="book-home-content">
                        <div className="book-home-content-area">
                            {isLoading ? (
                                <>
                                    <Skeleton width={200} height={25} />
                                    <br />
                                    <br />
                                </>
                            ) : (
                                <h2>{name}</h2>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={105} height={12} />
                                    <br />
                                </>
                            ) : (
                                <div className="row">
                                    <p className="star-icon">
                                        <Rating
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            initialRating={4}
                                            fractions={2}
                                            readonly="true"
                                        />
                                    </p>
                                </div>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={60} height={12} />
                                    <br />
                                </>
                            ) : (
                                <h5>৳ {price}</h5>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={150} height={12} />
                                    <br />
                                </>
                            ) : (
                                <p>
                                    লেখকঃ{' '}
                                    {writers && writers.length
                                        ? writers.map(({ name }) => name)
                                        : '-'}
                                </p>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={165} height={12} />
                                    <br />
                                </>
                            ) : (
                                <p>
                                    ক্যাটাগরিঃ{' '}
                                    {categories && categories.length
                                        ? categories.map(
                                              ({ name }) => `${name}, `
                                          )
                                        : '-'}
                                </p>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={185} height={12} />
                                    <br />
                                </>
                            ) : (
                                <p>
                                    প্রকাশের সালঃ{' '}
                                    {publish_year ? publish_year : '-'}
                                </p>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={205} height={12} />
                                    <br />
                                </>
                            ) : (
                                <p>
                                    প্রচ্ছদ অলং‍করণঃ{' '}
                                    {cover_designer ? cover_designer : '-'}
                                </p>
                            )}

                            {isLoading ? (
                                <>
                                    <Skeleton width={225} height={12} />
                                    <br />
                                </>
                            ) : (
                                <p>সংস্করণঃ {edition ? edition : '-'}</p>
                            )}

                            <div className="btn-part pt-4 d-flex">
                                {status === 'Upcoming' && (
                                    <div>
                                        <Link
                                            to={`/books/pre-order/${slug}`}
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Button className="left-btn">
                                                <i className="fas fa-shopping-cart"></i>
                                                &nbsp; প্রি-অর্ডার করুন
                                            </Button>
                                        </Link>
                                    </div>
                                )}

                                {status !== 'Upcoming' && (
                                    <div>
                                        <Link
                                            to="/books"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Button className="left-btn">
                                                <i className="fas fa-shopping-cart"></i>
                                                &nbsp; বইটি কিনুন
                                            </Button>
                                        </Link>
                                    </div>
                                )}

                                <Button
                                    outline
                                    color="secondary"
                                    className="btn-custom-outline right-btn"
                                >
                                    একটু পড়ে দেখুন
                                </Button>
                            </div>
                            {/* <h1 className="noselect">{name && name.split(' ')[0]}</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleBookImageAndInfo
