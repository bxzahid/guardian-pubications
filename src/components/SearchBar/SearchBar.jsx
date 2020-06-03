import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { loadSearchResult, removeSearchResult } from '../../store/Search'

import './SearchBar.scss'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        query: '',
    })

    const { query } = state

    const changeHandler = e => {
        setState({ query: e.target.value })
        window.history.replaceState(null, null, `/search?key=${e.target.value}`)
    }

    query !== '' && dispatch(loadSearchResult(query))

    query === '' && dispatch(removeSearchResult(query))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="search" id="search-box">
            <div className="search-navbar">
                <div className="nav-top">
                    <div className="container">
                        <div className="row">
                            <input
                                type="text"
                                placeholder="গার্ডিয়ানে খুঁজুন..."
                                onChange={changeHandler}
                                value={query}
                                id="query"
                                name="query"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
