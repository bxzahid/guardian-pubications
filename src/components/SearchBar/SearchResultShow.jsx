import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'
import Rating from 'react-rating'
import Loader from 'react-loader-spinner'

import { loadSearchResult } from '../../store/Search'

import './SearchResultShow.scss'

const SearchResultShow = () => {
    const location = useLocation()

    const query = decodeURIComponent(location.search.split('=')[1])

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        query !== 'undefined' &&
            query !== '' &&
            dispatch(loadSearchResult(query))
    }, [])

    const searchResult = useSelector(({ search }) => search)
    const { isLoading } = useSelector(({ meta }) => meta)

    const { data, status } = searchResult

    return (
        <section className="search-books">
            <div className="custom-container">
                <Link to="/">
                    <h5 className="pt-3">মূলপাতা</h5>
                </Link>
                {status === 200 && (
                    <h2 className="section-title pt-2">অনুসন্ধানের ফলাফল</h2>
                )}
                {status === 404 && (
                    <p className="text-danger lead pt-5">
                        কোনো ফলাফল পাওয়া যায় নি। অনুগ্রহ করে আবার অনুসন্ধান
                        করুন।
                    </p>
                )}
                {isLoading ? (
                    <div className="custom-loader">
                        <span>
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                width={120}
                            />
                        </span>
                    </div>
                ) : (
                    <div className="row row-content">
                        {data &&
                            data.map(({ id, slug, image, name, price }) => (
                                <div
                                    className="col-lg-2 col-md-3 col-sm-6"
                                    key={id}
                                >
                                    <Link to={`/books/${slug}`}>
                                        <div className="image">
                                            <img
                                                src={image}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Link>
                                    <h5>{name}</h5>
                                    <p
                                        className="star-icon"
                                        style={{ color: '#9f0c10' }}
                                    >
                                        <Rating
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            initialRating={4}
                                            fractions={2}
                                            readonly="true"
                                        />
                                    </p>
                                    <p>মুল্যঃ {price} টাকা</p>
                                    <Link to={`/books/${slug}`}>
                                        <div className="btn-area">
                                            <Button>বইটি দেখুন</Button>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SearchResultShow
