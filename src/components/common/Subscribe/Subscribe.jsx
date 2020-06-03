import React, { useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
import config from '../../../config'

import './Subscribe.scss'

const Subscribe = () => {
    const [state, setState] = useState({
        name: 'Test',
        contact: '',
    })

    const { contact } = state

    const changeHanlder = e => setState({ [e.target.name]: e.target.value })

    const submitHandler = () => {
        if (contact !== '') {
            axios
                .post(`${config.API_URL}/subscribe`, state)
                // TODOS: Have to remove console for production
                .then(res => {
                    console.log(res)
                })
                .catch(er => console.log(er))
            setState({ name: '', contact: '' })
        }
    }
    return (
        <section className="subscribe">
            <div className="subscribe-container">
                <div className="row">
                    <div className="col-md-11 right-text">
                        <h3>
                            পরবর্তী বই প্রকাশের সকল <br />
                            আপডেট পেতে সাবস্ক্রাইব করুন
                        </h3>
                        <div className="m-auto-xs">
                            <input
                                type="text"
                                placeholder="আপনার ফোন নম্বর"
                                onChange={changeHanlder}
                                name="contact"
                                value={contact}
                            />
                            <Button
                                className="btn btn-xs"
                                onClick={submitHandler}
                            >
                                সাবস্ক্রাইব করুন
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
