import React, { useEffect } from 'react'

import SearchBar from '../components/SearchBar/SearchBar'
import SearchResultShow from '../components/SearchBar/SearchResultShow'

const SearchPage = () => {
    useEffect(() => {
        document.title = 'অনুসন্ধান করুন - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <SearchBar />
            <SearchResultShow />
        </>
    )
}

export default SearchPage
