import React from 'react'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import Skeleton from 'react-loading-skeleton'

import './EssenceOfTheBook.scss'

const EssenceOfTheBook = () => {
    const { isLoading } = useSelector(({ meta }) => meta)
    const data = useSelector(({ book }) => book)

    const { description } = data

    return (
        <section className="sssence-of-the-book-area">
            <div className="book-main">
                <div className="book-main-container section-padding-top-bottom">
                    <h5>
                        {' '}
                        <span>বইয়ের মূলভাব</span>{' '}
                    </h5>
                    <div className="description">
                        {isLoading && <Skeleton count={6} />}
                        {!isLoading && ReactHtmlParser(description)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EssenceOfTheBook
