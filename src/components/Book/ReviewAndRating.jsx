import React from 'react'
import Rating from 'react-rating'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'

import './ReviewAndRating.scss'

const ReviewAndRating = () => {
    const data = useSelector(({ book }) => book)
    return (
        <section className="review-part">
            {data.reviews && data.reviews.length > 0 && (
                <div className="review-container section-padding-top-bottom">
                    <h2 className="section-title">
                        রি<span>ভিও এবং রে</span>টিং
                    </h2>
                    {data.reviews &&
                        data.reviews.map(
                            ({ id, name, ratting, comment, created_at }) => (
                                <div key={id} className="review-content">
                                    <h6>{name}</h6>
                                    <div className="row">
                                        <p className="star-icon">
                                            <Rating
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                initialRating={ratting}
                                                fractions={2}
                                                readonly="true"
                                            />
                                        </p>
                                        <div className="date">
                                            <Moment fromNow locale="bn">
                                                {created_at}
                                            </Moment>
                                            র লেখা
                                        </div>
                                    </div>
                                    <p>{comment}</p>
                                </div>
                            )
                        )}
                </div>
            )}
        </section>
    )
}

export default ReviewAndRating
