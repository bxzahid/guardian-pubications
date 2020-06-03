import React from 'react'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import './WriterOrTranslatorImageAndInfo.scss'

const WriterOrTranslatorImageAndInfo = ({ data }) => {
    const { image, name, bio } = data

    const writerData = useSelector(({ writer }) => writer)
    const translatorData = useSelector(({ translator }) => translator)

    const writerOrtranslator =
        window.location.pathname.split('/')[1] === 'writer' ? 'লেখক' : 'অনুবাদক'
    const writerOrtranslatorBio =
        window.location.pathname.split('/')[1] === 'writer'
            ? 'লেখকের কথাঃ'
            : 'অনুবাদকের কথাঃ'

    const publishedOrTranslatorBook =
        window.location.pathname.split('/')[1] === 'writer'
            ? 'প্রকাশিত বইঃ'
            : 'অনুবাদৃত বইঃ'

    const amountOfPublishedBooks =
        window.location.pathname.split('/')[1] === 'writer'
            ? writerData.books && writerData.books.length
            : translatorData.books && translatorData.books.length

    return (
        <>
            <section className="writer-or-translator-heading">
                <div className="custom-container">
                    <div className="writer-or-translator-title">
                        <h2>
                            {' '}
                            {name} <span>({writerOrtranslator})</span>
                        </h2>
                        <h5>
                            {publishedOrTranslatorBook} {amountOfPublishedBooks}{' '}
                            টি
                        </h5>
                    </div>
                </div>
            </section>

            <section className="writer-or-translator-heading-text">
                <div className="custom-container">
                    <img src={image} alt="" />
                    <div className="writer-or-translator-title-sml-dv">
                        <h2>
                            {' '}
                            {name} <span>({writerOrtranslator})</span>
                        </h2>
                        <h5>
                            {' '}
                            {publishedOrTranslatorBook} {amountOfPublishedBooks}{' '}
                            টি
                        </h5>
                    </div>
                    <div className="writer-translator-bio">
                        <h5>{writerOrtranslatorBio}</h5>
                    </div>
                    <p>{ReactHtmlParser(bio)}</p>
                </div>
            </section>
        </>
    )
}
export default WriterOrTranslatorImageAndInfo
