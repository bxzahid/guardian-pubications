import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import FindOutNextBookCard from '../../common/FindOutNextBookCard/FindOutNextBookCard'
import BookCardSkeleton from '../../common/BookCardSkeleton'

import './FindOutNextBook.scss'

const FindOutNextBook = () => {
    const { isLoading, books } = useSelector(({ books }) => books)

    const popularBooks =
        books !== undefined && books.filter(item => item.popular === true)
    const upcomingBooks =
        books !== undefined && books.filter(item => item.status === 'Upcoming')

    // For lastPublishedBooks
    books !== undefined &&
        books.sort((a, b) => {
            a = new Date(a.created_at)
            b = new Date(b.created_at)
            return a > b ? -1 : a < b ? 1 : 0
        })

    const skeletonCount = [0, 1, 2, 3, 4, 5]

    return (
        <section className="find-out-next-book-area">
            <div className="custom-container">
                <div className="find-out-next-book-content">
                    <h2 className="section-title">
                        খুঁজে নিন আপনার পরবর্তী বই
                    </h2>
                    <nav>
                        <div
                            className="nav nav-tabs justify-content-center"
                            id="nav-tab"
                            role="tablist"
                        >
                            <a
                                className="nav-item nav-link active search-book-active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#popular"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >
                                {' '}
                                <span className="key">জনপ্রিয়</span>{' '}
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#lastPublished"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >
                                {' '}
                                <span className="key">
                                    সর্বশেষ প্রকাশিত
                                </span>{' '}
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="nav-contact-tab"
                                data-toggle="tab"
                                href="#published"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                            >
                                {' '}
                                <span className="key">প্রকাশিতব্য</span>{' '}
                            </a>
                        </div>
                    </nav>

                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="popular"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        >
                            {isLoading && (
                                <div className="row">
                                    {skeletonCount.map(item => (
                                        <div
                                            key={item}
                                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                                        >
                                            <BookCardSkeleton />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="row row-content">
                                {popularBooks !== undefined &&
                                    popularBooks
                                        .slice(0, 6)
                                        .map(
                                            ({
                                                id,
                                                slug,
                                                thumbnail,
                                                name,
                                                writers,
                                            }) => (
                                                <div
                                                    key={id}
                                                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                                                >
                                                    <FindOutNextBookCard
                                                        slug={slug}
                                                        thumbnail={thumbnail}
                                                        name={name}
                                                        writers={writers}
                                                    />
                                                </div>
                                            )
                                        )}
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="lastPublished"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                        >
                            {isLoading && (
                                <div className="row">
                                    {skeletonCount.map(item => (
                                        <div
                                            key={item}
                                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                                        >
                                            <BookCardSkeleton />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="row row-content">
                                {books !== undefined &&
                                    books
                                        .slice(0, 6)
                                        .map(
                                            ({
                                                id,
                                                slug,
                                                thumbnail,
                                                name,
                                                writers,
                                            }) => (
                                                <div
                                                    key={id}
                                                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                                                >
                                                    <FindOutNextBookCard
                                                        slug={slug}
                                                        thumbnail={thumbnail}
                                                        name={name}
                                                        writers={writers}
                                                    />
                                                </div>
                                            )
                                        )}
                            </div>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="published"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                        >
                            {isLoading && (
                                <div className="row">
                                    {skeletonCount.map(item => (
                                        <div
                                            key={item}
                                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                                        >
                                            <BookCardSkeleton />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="row row-content">
                                {upcomingBooks !== undefined &&
                                    upcomingBooks
                                        .slice(0, 6)
                                        .map(
                                            ({
                                                id,
                                                slug,
                                                thumbnail,
                                                name,
                                                writers,
                                            }) => (
                                                <div
                                                    key={id}
                                                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                                                >
                                                    <FindOutNextBookCard
                                                        slug={slug}
                                                        thumbnail={thumbnail}
                                                        name={name}
                                                        writers={writers}
                                                    />
                                                </div>
                                            )
                                        )}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center xs-width mt-5">
                        <Link to="/books">
                            <Button>সবগুলো বই দেখুন</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindOutNextBook
