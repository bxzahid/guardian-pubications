import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import BookCard from '../../common/BookCard/BookCard'
import DefaultBookImage from '../../../assets/images/default-book-image.png'
import BookCardSkeleton from '../BookCardSkeleton'

import './OurPublishedBooks.scss'

const OurPublishedBooks = () => {
    const topFunction = e => {
        e.preventDefault()
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
    const { isLoading, books } = useSelector(({ books }) => books)

    const publishedBooks =
        books !== undefined && books.filter(item => item.status === 'Published')

    // For accending books
    publishedBooks !== undefined &&
        publishedBooks.sort((a, b) => {
            a = new Date(a.created_at)
            b = new Date(b.created_at)
            return a > b ? 1 : a < b ? -1 : 0
        })

    const skeletonCount = [0, 1, 2, 3, 4, 5]

    return (
        <section className="our-published-books d-flex align-items-center">
            <div className="custom-container section-padding-top-bottom">
                <h2 className="section-title">আমাদের প্রকাশিত বইসমূহ</h2>

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

                <div className="row published-book-list d-flex justify-content-center text-center">
                    {publishedBooks !== undefined &&
                        publishedBooks
                            .slice(0, 6)
                            .map(({ id, slug, thumbnail, name, writers }) => (
                                <div
                                    key={id}
                                    onClick={topFunction}
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
                                        </Lazyload>
                                    </Link>
                                </div>
                            ))}
                </div>
                <div className="mt-2 d-flex justify-content-center">
                    <Link to="/books">
                        <Button
                            outline
                            color="secondary"
                            className="mt-3 btn-custom-outline btn-published-books"
                        >
                            আমাদের সকল প্রকাশিত বই দেখুন
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurPublishedBooks
