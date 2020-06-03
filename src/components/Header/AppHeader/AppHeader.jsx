import React from 'react'
import config from '../../../config'
import { NavLink, Link } from 'react-router-dom'

import "./AppHeader.scss"

const AppHeader = () => {
    return (
        <header className="app-header-area fixed-top container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
                <Link to="/">
                    <div className="navbar-brand">
                        <img
                            src={require('../../../assets/images/logo.png')}
                            alt="Logo"
                        />
                    </div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <NavLink exact to="/" activeClassName="activee">
                            <li className="nav-item nav-active list-padding">
                                <span className="nav-link-hover">মুলপাতা</span>
                            </li>
                        </NavLink>
                        <NavLink exact to="/books" activeClassName="activee">
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">বইসমূহ</span>
                            </li>
                        </NavLink>
                        <NavLink exact to="/writers" activeClassName="activee">
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">লেখক</span>
                            </li>
                        </NavLink>
                        <NavLink
                            exact
                            to="/translators"
                            activeClassName="activee"
                        >
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">অনুবাদক</span>
                            </li>
                        </NavLink>
                        <NavLink
                            exact
                            to="/categories"
                            activeClassName="activee"
                        >
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">
                                    ক্যাটাগরি
                                </span>
                            </li>
                        </NavLink>
                        <NavLink
                            exact
                            to="/receiptions"
                            activeClassName="activee"
                        >
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">
                                    প্রাপ্তিস্থান
                                </span>
                            </li>
                        </NavLink>
                        <li className="nav-item list-padding ml-0">
                            <a
                                className="nav-link-hover"
                                href={config.BLOG_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="blog"
                            >
                                ব্লগ
                            </a>
                        </li>
                        <NavLink exact to="/review" activeClassName="activee">
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">রিভিউ</span>
                            </li>
                        </NavLink>
                        <NavLink exact to="/contact" activeClassName="activee">
                            <li className="nav-item list-padding">
                                <span className="nav-link-hover">যোগাযোগ</span>
                            </li>
                        </NavLink>
                        <Link to="/search">
                            <div
                                style={{ cursor: 'pointer' }}
                                className="search-icon"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default AppHeader
