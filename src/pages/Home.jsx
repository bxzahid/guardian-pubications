import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/Layout/AppLayout/AppLayout'
import BannerSlider from '../components/Home/BannerSlider/BannerSlider'
import FindOutNextBook from '../components/Home/FindOutNextBook/FindOutNextBook'
import Subscribe from '../components/common/Subscribe/Subscribe'
import OurPublishedBooks from '../components/common/OurPublishedBooks/OurPublishedBooks'
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection'
import BookDetailsSlider from '../components/Home/BookDetailsSlider/BookDetailsSlider'
import BookDetailsList from '../components/Home/BookDetailsList/BookDetailsList'
import VideoGallery from '../components/Home/VideoGallery/VideoGallery'
import ReadersCommentsSlider from '../components/Home/ReadersCommentsSlider/ReadersCommentsSlider'
import SelectTheBooksByCategories from '../components/Home/SelectTheBooksByCategories/SelectTheBooksByCategories'
import GuardianWriters from '../components/Home/GuardianWriters/GuardianWriters'
import MessageToGuardian from '../components/common/MessageToGuardian/MessageToGuardian'

import { loadBooks } from '../store/Books'
import { loadVideos } from '../store/Videos'
import { loadCategories } from '../store/Categories'
import { loadWriters } from '../store/Writers'
import { loadTranslators } from '../store/Translators'
import { loadReadersComments } from '../store/ReadersComments'

const HomePage = () => {
    const dispatch = useDispatch()

    const { books } = useSelector(({ books }) => books)
    const videos = useSelector(({ videos }) => videos)
    const { writers } = useSelector(({ writers }) => writers)
    const { translators } = useSelector(({ translators }) => translators)
    const categories = useSelector(({ categories }) => categories)
    const readersComments = useSelector(
        ({ readersComments }) => readersComments
    )

    useEffect(() => {
        dispatch(loadBooks(books))
        dispatch(loadVideos(videos))
        dispatch(loadCategories(categories))
        dispatch(loadWriters(writers))
        dispatch(loadTranslators(translators))
        dispatch(loadReadersComments(readersComments))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'মূলপাতা - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <AppLayout>
            <BannerSlider />
            <FindOutNextBook />
            <Subscribe />
            <OurPublishedBooks />
            <FeaturedSection />
            <BookDetailsSlider />
            <BookDetailsList />
            <VideoGallery />
            <FeaturedSection />
            <ReadersCommentsSlider />
            <SelectTheBooksByCategories />
            <GuardianWriters />
            <MessageToGuardian />
        </AppLayout>
    )
}

export default HomePage
