import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import AvatarCard from '../../common/AvatarCard/AvatarCard'
import AvatarCardSkeleton from '../../common/AvatarCardSkeleton'

import './PopularTranslators.scss'

const PopularTranslators = () => {
    // TODOS: Have to filter popular writers
    const { isLoading, translators } = useSelector(
        ({ translators }) => translators
    )

    const [amountOfItemShow, setAmountOfItemShow] = useState(12)

    const addMore = () => {
        setAmountOfItemShow(amountOfItemShow + 12)
    }

    const skeletonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <section className="translator">
            <div className="custom-container section-padding-top-bottom">
                <div className="writter-content">
                    <h2 className="section-title">
                        জন<span>প্রিয় অনুবাদক</span>বৃন্দ
                    </h2>

                    {isLoading && (
                        <div className="row">
                            {skeletonCount.map(item => (
                                <div
                                    className="col-lg-2 col-md-4 col-sm-6 col-6"
                                    key={item}
                                >
                                    <AvatarCardSkeleton
                                        color="white"
                                        highlightColor="#F7F7F7"
                                        margin="ml-4"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="row row-content">
                        {translators !== undefined &&
                            translators
                                .slice(0, amountOfItemShow)
                                .map(({ id, slug, image, name }) => (
                                    <div
                                        key={id}
                                        className="col-lg-2 col-md-4 col-sm-6 col-6"
                                    >
                                        <Link to={`/translators/${slug}`}>
                                            <AvatarCard
                                                src={image}
                                                name={name}
                                            />
                                        </Link>
                                    </div>
                                ))}
                    </div>
                    {translators.length > 12 && (
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

export default PopularTranslators
