import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import './Categories.scss'

const Categories = () => {
    const data = useSelector(({ categories }) => categories)
    const { isLoading } = useSelector(({ meta }) => meta)

    const skeletonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <section className="book-category">
            <div className="custom-container section-padding-top-bottom">
                <div className="book-category-content">
                    <h2 className="section-title">
                        বইয়ে<span>র ক্যাটাগরি</span>সমূহ
                    </h2>

                    {isLoading && (
                        <div className="row">
                            {skeletonCount.map(item => (
                                <div
                                    key={item}
                                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                                >
                                    <div className="pb-4">
                                        <Skeleton width={176} height={265} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="row row-content">
                        {data.map(({ id, slug, name, letter, image }) => (
                            <div
                                key={id}
                                className="col-lg-2 col-md-4 col-sm-6 col-6"
                            >
                                <Link to={`/categories/${slug}`}>
                                    <div
                                        className="single-col"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                    >
                                        <div className="inner-content"></div>
                                        <div className="overlay">
                                            <h5>{name}</h5>
                                            <h1>{letter}</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
