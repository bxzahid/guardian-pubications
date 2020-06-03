import React from 'react'
import { useSelector } from 'react-redux'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'

const Reviews = () => {
    const data = useSelector(({ readersComments }) => readersComments)
    return (
        <section className="review-page">
            <div className="container section-padding-top-bottom">
                {data.length > 0 ? (
                    <h2 className="section-title">পাঠকদের মন্তব্য</h2>
                ) : (
                    <p className="text-danger lead pt-5 text-center">কোনো মন্তব্য নেই।</p>
                )}

                {data.map(({ id, comment, image, name, designation }) => (
                    <div className="row row-content pb-5" key={id}>
                        <div className="col-12 col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <Lazyload
                                        key={id}
                                        height={100}
                                        offset={[-100, 100]}
                                        placeholder={
                                            <Skeleton
                                                circle={true}
                                                height={119}
                                                width={118}
                                            />
                                        }
                                    >
                                        <img
                                            src={image}
                                            className="rounded-circle img-fluid border"
                                            alt=""
                                        />
                                    </Lazyload>
                                </div>
                                <div className="col-12 col-md-10">
                                    <h5>{name}</h5>
                                    <h6 className="text-secondary mb-3">
                                        {designation}
                                    </h6>
                                    <p>{comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews
