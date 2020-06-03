import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

// import PopularTranslator from '../components/Translators/PopularTranslators/PopularTranslators'
import AllTranslator from '../components/Translators/Translators/Translators'
import Subscribe from '../components/common/Subscribe/Subscribe'

import { loadTranslators } from '../store/Translators'

const TranslatorsPage = () => {
    const dispatch = useDispatch()

    const { translators } = useSelector(({ translators }) => translators)

    useEffect(() => {
        dispatch(loadTranslators(translators))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'অনুবাদকবৃন্দ - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <AppLayout>
            {/* TODOS: Have to remove comment when we will can filter popular translators */}
            {/* <PopularTranslator /> */}
            <AllTranslator />
            <Subscribe />
        </AppLayout>
    )
}

export default TranslatorsPage
