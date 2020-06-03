import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import BookCard from '../../common/BookCard/BookCard'
import DefaultBookImage from '../../../assets/images/default-book-image.png'
import BookCardSkeleton from '../../common/BookCardSkeleton'

import './OurAllBooks.scss'

const OurAllBooks = () => {
    const { isLoading, books: allBooks } = useSelector(({ books }) => books)

    // For accending order
    allBooks !== undefined &&
        allBooks.sort((a, b) => {
            a = new Date(a.created_at)
            b = new Date(b.created_at)
            return a > b ? 1 : a < b ? -1 : 0
        })

    const [amountOfItemShow, setAmountOfItemShow] = useState(12)

    const addMore = () => {
        setAmountOfItemShow(amountOfItemShow + 12)
    }

    const skeletonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <section className="published-book all-books">
            <div className="custom-container section-padding-top-bottom section-padding-bottom-reset">
                <div className="published-book-content">
                    <h2 className="section-title">
                        আমাদে<span>র সকল </span>বই সমূহ
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
                        {allBooks !== undefined &&
                            allBooks
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
                                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                                            key={id}
                                        >
                                            <Link to={`/books/${slug}`}>
                                                <BookCard
                                                    image={
                                                        thumbnail === undefined
                                                            ? DefaultBookImage
                                                            : thumbnail
                                                    }
                                                    name={name}
                                                    author={
                                                        writers.length
                                                            ? writers[0].name
                                                            : '-'
                                                    }
                                                />
                                            </Link>
                                        </div>
                                    )
                                )}
                    </div>
                    {allBooks.length > 12 &&
                        allBooks.length > amountOfItemShow && (
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

export default OurAllBooks
