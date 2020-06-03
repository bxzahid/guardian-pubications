import React, { useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
import config from '../../config'

import './PreOrder.scss'

const PreOrder = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        address: '',
        amount: '1',
    })

    const { name, phone, address, amount } = state

    const changeHanlder = e =>
        setState({ ...state, [e.target.name]: e.target.value })

    const amountHanlder = e => setState({ ...state, amount: e.target.value })

    const submitHandler = e => {
        e.preventDefault()
        console.log(state)
        if (name && phone && address && amount !== '') {
            axios
                .post(`${config.API_URL}/`, state)
                .then(res => {
                    console.log(res)
                })
                .catch(e => console.log(e))
            setState({ name: '', phone: '', address: '', amount: '' })
        }
    }

    return (
        <section className="pre-order-area">
            <div className="pre-order-container section-padding-top-bottom">
                <h2 className="section-title">প্রি-অর্ডার করুন</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group name-field">
                        <label htmlFor="name-field">নাম</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name-field"
                            name="name"
                            value={name}
                            placeholder="আপনার নাম লিখুন"
                            onChange={changeHanlder}
                        />
                    </div>

                    <div className="form-group phone-field">
                        <label htmlFor="phone-field">ফোন</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone-field"
                            name="phone"
                            value={phone}
                            placeholder="আপনার ফোন নাম্বার লিখুন"
                            onChange={changeHanlder}
                        />
                    </div>

                    <div className="form-group address-field">
                        <label htmlFor="address-field">ঠিকানা</label>
                        <textarea
                            className="form-control"
                            id="address-field"
                            name="address"
                            value={address}
                            rows="4"
                            placeholder="আপনার ঠিকানা লিখুন"
                            onChange={changeHanlder}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>সংখ্যা</label>
                        <select
                            className="form-control"
                            value={amount}
                            onChange={amountHanlder}
                        >
                            <option name="amount" value="1">
                                ১
                            </option>
                            <option name="amount" value="2">
                                ২
                            </option>
                            <option name="amount" value="3">
                                ৩
                            </option>
                            <option name="amount" value="4">
                                ৪
                            </option>
                            <option name="amount" value="5">
                                ৫
                            </option>
                            <option name="amount" value="6">
                                ৬
                            </option>
                            <option name="amount" value="7">
                                ৭
                            </option>
                            <option name="amount" value="8">
                                ৮
                            </option>
                            <option name="amount" value="9">
                                ৯
                            </option>
                            <option name="amount" value="10">
                                ১০
                            </option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center xs-width mt-5">
                        <Button type="submit">সাবমিট করুন</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PreOrder
