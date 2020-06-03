import React, { useEffect } from 'react'

import SinglePageAppLayout from '../components/Layout/SinglePageAppLayout/SinglePageAppLayout'

import PreOrder from '../components/PreOrder/PreOrder'

const PreOrderPage = () => {
    useEffect(() => {
        document.title = 'প্রি-অর্ডার - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])
    return (
        <SinglePageAppLayout>
            <PreOrder />
        </SinglePageAppLayout>
    )
}

export default PreOrderPage
