import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Books from './pages/Books'
import Book from './pages/Book'
import PreOrder from './pages/PreOrder'
import Writers from './pages/Writers'
import Writer from './pages/Writer'
import Translators from './pages/Translators'
import Translator from './pages/Translator'
import Categories from './pages/Categories'
import Category from './pages/Category'
import Receiptions from './pages/Receiptions'
import Review from './pages/Review'
import Contact from './pages/Contact'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const Routes = ({ location }) => {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:slug" component={Book} />
            <Route exact path="/books/pre-order/:slug" component={PreOrder} />
            <Route exact path="/writers" component={Writers} />
            <Route exact path="/writers/:slug" component={Writer} />
            <Route exact path="/translators" component={Translators} />
            <Route exact path="/translators/:slug" component={Translator} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/:slug" component={Category} />
            <Route exact path="/receiptions" component={Receiptions} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/not-found" component={NotFound} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes
