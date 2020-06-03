import React from 'react'
import { useSelector } from 'react-redux'
import DefaultBgImg from '../../assets/images/bg.png'

import './CategoryImageAndInfo.scss'

const CategoryImageAndInfo = () => {
    const data = useSelector(({ category }) => category)
    const { name, image, cover, books } = data

    return (
        <div
            className="bg-opacity"
            style={{
                backgroundImage: `url(${
                    cover === null ? DefaultBgImg : cover
                })`,
            }}
        >
            <section className="category-heading">
                <div className="custom-container">
                    <div className="category-head-name">
                        <h2>{name}</h2>
                        <h6>মোট বইঃ {books && books.length} টি</h6>
                    </div>
                    <div className="heading-circle">
                        <img src={image} alt="" />
                    </div>
                </div>
            </section>

            <section className="category-heading-bottom">
                <div className="custom-container">
                    <div className="category-head-name-sml-shw">
                        <h2>{name}</h2>
                        <h6>মোট বইঃ {books && books.length} টি</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CategoryImageAndInfo
