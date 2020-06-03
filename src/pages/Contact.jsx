import React, { useEffect } from 'react'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

import MapAndAddress from '../components/Contact/MapAndAddress'
import MessageToGuardian from '../components/common/MessageToGuardian/MessageToGuardian'

const ContactPage = () => {
    useEffect(() => {
        document.title = 'যোগাযোগ - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])
    return (
        <AppLayout>
            <MapAndAddress/>
            <MessageToGuardian/>
        </AppLayout>
    )
}

export default ContactPage
