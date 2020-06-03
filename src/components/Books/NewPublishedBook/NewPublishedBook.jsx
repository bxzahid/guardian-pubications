import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import BookCard from '../../common/BookCard/BookCard'
import DefaultBookImage from '../../../assets/images/default-book-image.png'
import BookCardSkeleton from '../../common/BookCardSkeleton'

import './NewPublishedBook.scss'

const NewPublishedBook = () => {
    const { isLoading, books: newPublishedBooks } = useSelector(
        ({ books }) => books
    )

    newPublishedBooks !== undefined &&
        newPublishedBooks.sort((a, b) => {
            a = new Date(a.created_at)
            b = new Date(b.created_at)
            return a > b ? -1 : a < b ? 1 : 0
        })

    const [amountOfItemShow, setAmountOfItemShow] = useState(12)

    const addMore = () => {
        setAmountOfItemShow(amountOfItemShow + 12)
    }

    const skeletonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <section className="published-book">
            <div className="custom-container section-padding-top-bottom">
                <div className="published-book-content">
                    <h2 className="section-title">
                        নতুন <span>প্রকাশিত</span> বই
                    </h2>

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
                        {newPublishedBooks !== undefined &&
                            newPublishedBooks
                                .slice(0, amountOfItemShow)
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
                                            <Link to={`/books/${slug}`}>
                                                <Lazyload
                                                    key={id}
                                                    height={100}
                                                    F
                                                    offset={[-100, 100]}
                                                    placeholder={
                                                        <Skeleton
                                                            width={168}
                                                            height={240}
                                                        />
                                                    }
                                                >
                                                    <BookCard
                                                        image={
                                                            thumbnail ===
                                                            undefined
                                                                ? DefaultBookImage
                                                                : thumbnail
                                                        }
                                                        name={name}
                                                        author={
                                                            writers.length
                                                                ? writers[0]
                                                                      .name
                                                                : '-'
                                                        }
                                                    />
                                                </Lazyload>
                                            </Link>
                                        </div>
                                    )
                                )}
                    </div>

                    {newPublishedBooks.length > 12 &&
                        newPublishedBooks.length > amountOfItemShow && (
                            <div
                                className="d-flex justify-content-center xs-width mt-3"
                                onClick={addMore}
                            >
                                <Button>আরোও দেখুন</Button>
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default NewPublishedBook
