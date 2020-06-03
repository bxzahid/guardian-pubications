import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

import "./SinglePageAppHeader.scss"

const SinglePageAppHeader = () => {
    const history = useHistory()
    return (
        <header className="single-page-app-header-area fixed-top">
            <div className="container">
                <Navbar light expand="lg" className="navbar p-0" id="navbar">
                    <NavbarBrand
                        className="navbar-top-padding"
                        id="navbarBrand"
                    >
                        <div onClick={() => history.goBack()}>
                            <div className="btn-back back-btn-top-padding">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
                                </svg>
                            </div>
                        </div>
                    </NavbarBrand>

                    <Nav className="m-auto p-0 pt-2" id="siteTitle" navbar>
                        <NavItem>
                            <Link to="/">
                                <div className="logo-top-padding">
                                    <img
                                        src={require('../../../assets/images/logo.png')}
                                        alt="Logo"
                                    />
                                </div>
                            </Link>
                        </NavItem>
                    </Nav>
                    <div className="searchbar-p-top">
                        <Link to="/search">
                            <span
                                className="pl-2 search-icon-style"
                                id="searchIcon"
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
                            </span>
                        </Link>
                    </div>
                </Navbar>
            </div>
        </header>
    )
}

export default SinglePageAppHeader
