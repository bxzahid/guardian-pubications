import React from 'react'
import { useSelector } from 'react-redux'
import FindOutNextBookCard from '../../common/FindOutNextBookCard/FindOutNextBookCard'
import BookCardSkeleton from '../../common/BookCardSkeleton'

const WriterBookShow = () => {
    const { books } = useSelector(({ writer }) => writer)

    const { isLoading } = useSelector(({ meta }) => meta)

    const skeletonCount = [0, 1, 2, 3, 4, 5]

    return (
        <section className="custom-container pt-4">
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

            {books && books.length === 0 && isLoading === false && (
                <p className="text-danger lead pt-5 text-center">
                    কোনো বই পাওয়া যায় নি।
                </p>
            )}

            <div className="row">
                {books &&
                    books.map(({ id, slug, image, name }) => (
                        <div
                            key={id}
                            className="col-lg-2 col-md-4 col-sm-6 col-6"
                        >
                            <FindOutNextBookCard
                                id={id}
                                slug={slug}
                                thumbnail={image}
                                name={name}
                                writers="0"
                            />
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default WriterBookShow
