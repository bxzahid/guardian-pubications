import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import AvatarCard from '../../common/AvatarCard/AvatarCard'
import AvatarCardSkeleton from '../../common/AvatarCardSkeleton'

import './GuardianWriters.scss'

const GuardianWriters = () => {
    const { isLoading, writers } = useSelector(({ writers }) => writers)

    const skeletonCount = [0, 1, 2, 3, 4, 5]

    return (
        <section className="all-writers">
            <div className="custom-container section-padding-top-bottom">
                <h2 className="section-title">গার্ডিয়ানের লেখকবৃন্দ</h2>

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
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className="row">
                    {writers !== undefined &&
                        writers.slice(0, 6).map(({ id, slug, image, name }) => (
                            <div
                                className="col-lg-2 col-md-4 col-sm-6 col-6"
                                key={id}
                            >
                                <Link to={`/writers/${slug}`}>
                                    <AvatarCard src={image} name={name} />
                                </Link>
                            </div>
                        ))}
                </div>

                <div className="d-flex justify-content-center xs-width margin-top">
                    <Link to="/writers">
                        <Button>লেখকবৃন্দদের দেখুন</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default GuardianWriters
