import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './SelectTheBooksByCategories.scss'

import CategoryBookShow from './CategoryBookShow.jsx'
import WriterBookShow from './WriterBookShow.jsx'
import TranslatorBookShow from './TranslatorBookShow.jsx'

import { loadCategory } from '../../../store/Category'
import { loadWriter } from '../../../store/Writer'
import { loadTranslator } from '../../../store/Translator'

const SelectTheBooksByCategories = () => {
    const dispatch = useDispatch()

    const categories = useSelector(({ categories }) => categories)
    const { writers } = useSelector(({ writers }) => writers)
    const { translators } = useSelector(({ translators }) => translators)

    const [selectedCategory, setSelectedCategory] = useState('')
    const [secondDropdown, setSecondDropdown] = useState('')

    const changeHanlder = e => {
        setSelectedCategory(e.target.value)
    }

    const secondDropdownChangeHandler = e => setSecondDropdown(e.target.value)

    useEffect(() => {
        selectedCategory === 'category' &&
            secondDropdown !== '' &&
            dispatch(loadCategory(secondDropdown))

        selectedCategory === 'writer' &&
            secondDropdown !== '' &&
            dispatch(loadWriter(secondDropdown))

        selectedCategory === 'translator' &&
            secondDropdown !== '' &&
            dispatch(loadTranslator(secondDropdown))
    }, [secondDropdown])

    return (
        <section className="select-the-books-by-categories">
            <div className="section-padding-top-bottom">
                <h2 className="section-title">বইগুলো দেখুন</h2>

                <div className="row category-select-field mt-5">
                    <div className="col-lg-6 col-sm-12 pb-sm-4 pb-md-4 pb-lg-0 category-field">
                        <select
                            className="form-control"
                            onChange={changeHanlder}
                            value={
                                selectedCategory !== ''
                                    ? selectedCategory
                                    : 'নির্বাচন করুন'
                            }
                        >
                            <option disabled>নির্বাচন করুন</option>

                            <option name="category" value="category">
                                ক্যাটাগরি
                            </option>
                            <option name="writer" value="writer">
                                লেখক
                            </option>
                            <option name="translator" value="translator">
                                অনুবাদক
                            </option>
                        </select>
                    </div>

                    {selectedCategory === '' && (
                        <div className="col-lg-6 col-sm-12">
                            <select
                                className="form-control"
                                disabled
                                value={
                                    selectedCategory === '' && 'নির্বাচন করুন'
                                }
                            >
                                <option>নির্বাচন করুন</option>
                            </select>
                        </div>
                    )}

                    {selectedCategory === 'category' && (
                        <div className="col-lg-6 col-sm-12">
                            <select
                                className="form-control"
                                onChange={secondDropdownChangeHandler}
                                value={
                                    secondDropdown !== ''
                                        ? secondDropdown
                                        : 'নির্বাচন করুন'
                                }
                            >
                                <option disabled>নির্বাচন করুন</option>
                                {categories.map(({ id, name }) => (
                                    <option key={id} name={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {selectedCategory === 'writer' && (
                        <div className="col-lg-6 col-sm-12">
                            <select
                                className="form-control"
                                onChange={secondDropdownChangeHandler}
                                value={
                                    secondDropdown !== ''
                                        ? secondDropdown
                                        : 'নির্বাচন করুন'
                                }
                            >
                                <option disabled>নির্বাচন করুন</option>
                                {writers.map(({ id, name }) => (
                                    <option key={id} name={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {selectedCategory === 'translator' && (
                        <div className="col-lg-6 col-sm-12">
                            <select
                                className="form-control"
                                onChange={secondDropdownChangeHandler}
                                value={
                                    secondDropdown !== ''
                                        ? secondDropdown
                                        : 'নির্বাচন করুন'
                                }
                            >
                                <option disabled>নির্বাচন করুন</option>
                                {translators.map(({ id, name }) => (
                                    <option key={id} name={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
                {selectedCategory === 'category' && secondDropdown !== '' && (
                    <CategoryBookShow />
                )}
                {selectedCategory === 'writer' && secondDropdown !== '' && (
                    <WriterBookShow />
                )}
                {selectedCategory === 'translator' && secondDropdown !== '' && (
                    <TranslatorBookShow />
                )}
            </div>
        </section>
    )
}

export default SelectTheBooksByCategories
