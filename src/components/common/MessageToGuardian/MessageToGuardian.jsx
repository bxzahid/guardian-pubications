import React, { useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
import config from '../../../config'

import "./MessageToGuardian.scss"

const MessageToGuardian = () => {
    const [state, setState] = useState({
        name: '',
        contact: '',
        message: '',
    })

    const { name, contact, message } = state

    const changeHanlder = e =>
        setState({ ...state, [e.target.name]: e.target.value })

    const submitHandler = () => {
        if (name && contact && message !== '') {
            axios
                .post(`${config.API_URL}/contact-message`, state)
                .then(res => {
                    console.log(res)
                })
                .catch(e => console.log(e))
            setState({ name: '', contact: '', message: '' })
        }
    }

    return (
        <section className="message-to-guardian">
            <div className="section-padding-top-bottom">
                <h2 className="section-title">গার্ডিয়ানকে লিখুন</h2>
                <p className="text-center">
                    {/* TODO: Have to change this text */}
                    বাংলা ভাষার শ্রেষ্ঠ ইসলামি অনুপ্রেরণামূলক ১০০টি বাছাইকৃত
                    কবিতা সংকলন। এখানে একটি কবিতা আমরা তুলে ধরছি।
                </p>

                <div className="row name-email-field mt-5">
                    <div className="col-lg-6 col-sm-12 pb-sm-4 pb-md-4 pb-lg-0 name-field">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="আপনার নাম লিখুন"
                            onChange={changeHanlder}
                            value={name}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <input
                            className="form-control"
                            type="email"
                            name="contact"
                            placeholder="আপনার ইমেইল প্রেরণ করুন"
                            onChange={changeHanlder}
                            value={contact}
                        />
                    </div>
                </div>
                <div className="row message">
                    <div className="col">
                        <textarea
                            className="form-control mt-4"
                            placeholder="আপনার মন্তব্য লিখুন"
                            name="message"
                            cols="80"
                            rows="5"
                            onChange={changeHanlder}
                            value={message}
                        />
                    </div>
                </div>

                <div className="row send-btn-width mt-4">
                    <div className="col">
                        <Button className="send-btn" onClick={submitHandler}>
                            বার্তা প্রেরণ করুন
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageToGuardian
