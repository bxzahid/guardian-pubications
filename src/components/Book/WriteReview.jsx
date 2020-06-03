import React, { useState } from 'react'
import { Button } from 'reactstrap'
import Rating from 'react-rating'
import axios from 'axios'
import config from '../../config'

import './WriteReview.scss'

const WriteReview = ({ slug }) => {
    const [state, setState] = useState({
        name: '',
        ratting: '0',
        comment: '',
    })

    const { name, ratting, comment } = state

    const changeHanlder = e =>
        setState({ ...state, [e.target.name]: e.target.value })

    const submitHandler = () => {
        if (name && comment !== '') {
            axios
                .post(`${config.API_URL}/books/${slug}/reviews`, state)
                .then(res => {
                    console.log(res)
                })
                .catch(e => console.log(e))
            setState({ name: '', ratting: '', comment: '' })
        }
    }

    return (
        <section className="write-review">
            <div className="write-review-container section-padding-top-bottom">
                <h3>
                    আ<span>পনি রিভিউ </span>দিন
                </h3>
                <form>
                    <div className="form-row">
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="আপনার নাম"
                                onChange={changeHanlder}
                                value={name}
                                name="name"
                            />
                        </div>
                        <div className="col-sm-6 padding-top">
                            <span>আপনার রেটিং</span>
                            <span className="star-icon">
                                <Rating
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    fractions={2}
                                    initialRating={ratting}
                                    onClick={value =>
                                        setState({
                                            ...state,
                                            ratting: value,
                                        })
                                    }
                                />
                            </span>
                        </div>
                    </div>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="আপনার মতামত লিখুন"
                        onChange={changeHanlder}
                        name="comment"
                        value={comment}
                    ></textarea>
                </form>
                <Button onClick={submitHandler}>সাবমিট করুন</Button>
            </div>
        </section>
    )
}

export default WriteReview
