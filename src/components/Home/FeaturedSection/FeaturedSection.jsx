import React from 'react'
import { Button } from 'reactstrap'

import "./FeaturedSection.scss"

const FeaturedSection = () => {
    return (
        <section className="featured-section">
            {/* TODO: have to implement after getting api */}
            {/* TODO: have to add react html parser */}
            <div className="row align-items-center w-100 custom-container-for-rs section-padding-top-bottom">
                <div className="col-md-6">
                    <img
                        src={require('../../../assets/images/book-details.png')}
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6 book-contents-area padding-for-xs">
                    <div className="book-contents">
                        <h5 className="pb-3">
                            {' '}
                            <span>মুহাম্মাদ গাজালি</span>-র
                        </h5>
                        <h3>মুসলিম চরিত্র</h3>
                        <p className="text-justify">
                            ‘মুসলিম চরিত্র’ প্রখ্যাত স্কলার মুহাম্মাদ আল-গাজালির
                            বিখ্যাত বই ‘খুলকুল মুসলিম’ গ্রন্থের অনুবাদ। তরুণ
                            অনুবাদক আলী আহমাদ মাবরুরের এটি দ্বিতীয় অনুবাদ
                            গ্রন্থ। গ্রন্থটি ইসলামি নৈতিকতার সেই ব্যাপকতর
                            দৃষ্টিভঙ্গি উপস্থাপন করেছে; যা ব্যক্তিগত, ধর্মীয়,
                            সামাজিক, অর্থনৈতিক ও রাজনৈতিক সকল দিককে আচ্ছাদিত
                            করে। ইসলামি নৈতিকতা শুধুমাত্র মুসলিম সমাজের জন্য
                            সীমাবদ্ধ নয; বরং এটি মানব সমাজে ব্যাপকভাবে বিস্তৃত।
                            ইসলাম সকল মানুষের উৎপত্তিকে একক পিতার (আদম আঃ) সাথে
                            যুক্ত করে এবং সমতা, ন্যায়বিচার এবং ন্যায়নিষ্ঠার
                            নীতিগুলি সমর্থন করে। ইসলাম সব ধরনের জীবনকে সম্মান
                            করে এবং সমবেদনা ও দয়ার সাথে আচরণ করে মুসলিম চরিত্র’
                            প্রখ্যাত স্কলার মুহাম্মাদ আল-গাজালির বিখ্যাত বই
                            ‘খুলকুল মুসলিম’ গ্রন্থের অনুবাদ। তরুণ অনুবাদক আলী
                            আহমাদ মাবরুরের এটি দ্বিতীয় অনুবাদ গ্রন্থ। গ্রন্থ
                            ইসলামি নৈতিকতার সেই ব্যাপকতর দৃষ্টিভঙ্গি উপস্থাপন
                            করেছে; যা ব্যক্তিগত, ধর্মীয়, সামাজিক, অর্থনৈতিক ও
                            রাজনৈতিক সকল দিককে আচ্ছাদিত করে। ইসলামি নৈতিক
                            শুধুমাত্র মুসলিম সমাজের জন্য সীমাবদ্ধ নয; বরং এটি
                            মানব সমাজে ব্যাপকভাবে বিস্তৃত। ইসলাম সকল মানুষের
                            উৎপত্তিকে একক পিতার (আদম আঃ) সাথে যুক্ত করে এবং
                            সমতা, ন্যায়বিচার এবং ন্যায়নিষ্ঠার নীতিগুলি সমর্থন
                            করে। ইসলাম সব ধরনের জীবনকে সম্মান করে এবং সমবেদনা ও
                            দয়ার সাথে আচরণ করে
                        </p>
                        <div className="btn-area btn-xs">
                            <Button>বইটি দেখুন</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection


