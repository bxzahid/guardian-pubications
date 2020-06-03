import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import AvatarCard from '../../common/AvatarCard/AvatarCard'
import AvatarCardSkeleton from '../../common/AvatarCardSkeleton'

import './Writers.scss'

const Writers = () => {
    const { isLoading, writers } = useSelector(({ writers }) => writers)

    const [amountOfItemShow, setAmountOfItemShow] = useState(12)

    const addMore = () => {
        setAmountOfItemShow(amountOfItemShow + 12)
    }

    const skeletonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <section className="writter writters">
            <div className="custom-container section-padding-top-bottom">
                <div className="writter-content">
                    <h2 className="section-title">
                        সক<span>ল লেখক</span>বৃন্দ
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
                        {writers !== undefined &&
                            writers
                                .slice(0, amountOfItemShow)
                                .map(({ id, slug, image, name }) => (
                                    <div
                                        key={id}
                                        className="col-lg-2 col-md-4 col-sm-6 col-6"
                                    >
                                        <Link to={`/writers/${slug}`}>
                                            <AvatarCard
                                                src={image}
                                                name={name}
                                            />
                                        </Link>
                                    </div>
                                ))}
                    </div>

                    {writers.length > 12 && writers.length > amountOfItemShow && (
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

export default Writers
