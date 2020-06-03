import React, { useEffect } from 'react'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

const ReceiptionsPage = () => {
    useEffect(() => {
        document.title = 'প্রাপ্তিস্থান - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])
    return (
        <AppLayout>
            <section className="">
                <div className="container section-padding-top-bottom">
                    <h2 className="section-title">প্রাপ্তিস্থান</h2>
                    <div className="row row-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">নাম</th>
                                    <th scope="col">ঠিকানা</th>
                                    <th scope="col">ফোন</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default ReceiptionsPage
