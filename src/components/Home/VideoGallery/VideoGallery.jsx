import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ModalVideo from 'react-modal-video'
import Lazyload from 'react-lazyload'
import Spinner from '../../Spinner'

import './VideoGallery.scss'

const VideoGallery = () => {
    const data = useSelector(({ videos }) => videos)

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)

    const openModal1 = () => {
        setIsOpen1(true)
    }
    const openModal2 = () => {
        setIsOpen2(true)
    }
    const openModal3 = () => {
        setIsOpen3(true)
    }
    const openModal4 = () => {
        setIsOpen4(true)
    }
    const openModal5 = () => {
        setIsOpen5(true)
    }

    return (
        <section className="video-gallery d-flex align-items-center">
            {data.length > 0 && (
                <>
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen1}
                        videoId={data.length && data[0].url.split('/')[3]}
                        onClose={() => setIsOpen1(false)}
                    />
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen2}
                        videoId={data.length && data[1].url.split('/')[3]}
                        onClose={() => setIsOpen2(false)}
                    />
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen3}
                        videoId={data.length && data[2].url.split('/')[3]}
                        onClose={() => setIsOpen3(false)}
                    />
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen4}
                        videoId={data.length && data[3].url.split('/')[3]}
                        onClose={() => setIsOpen4(false)}
                    />
                    <ModalVideo
                        channel="youtube"
                        isOpen={isOpen5}
                        videoId={data.length && data[4].url.split('/')[3]}
                        onClose={() => setIsOpen5(false)}
                    />
                    <div className="container section-padding-top-bottom">
                        <h2 className="section-title">ভিডিও গ্যালারী</h2>
                        <div className="row all-video-item">
                            <div className="col-md-6 mb-res">
                                {data[0] && (
                                    <div className="video first-video">
                                        <Lazyload
                                            key={data[0].id}
                                            height={100}
                                            offset={[-100, 100]}
                                            placeholder={<Spinner />}
                                        >
                                            <img
                                                src={data[0].image}
                                                alt=""
                                                className="first-img img-fluid"
                                                onClick={openModal1}
                                            />
                                        </Lazyload>
                                        <div
                                            className="play-icon"
                                            onClick={openModal1}
                                        >
                                            <i
                                                style={{
                                                    color: '#D7D6D5',
                                                    cursor: 'pointer',
                                                }}
                                                className="far fa-play-circle fa-3x"
                                            ></i>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        {data[1] && (
                                            <div className="video">
                                                <Lazyload
                                                    key={data[1].id}
                                                    height={100}
                                                    offset={[-100, 100]}
                                                    placeholder={<Spinner />}
                                                >
                                                    <img
                                                        src={data[1].image}
                                                        alt=""
                                                        className="img-fluid pb-3"
                                                        onClick={openModal2}
                                                    />
                                                </Lazyload>
                                                <div
                                                    className="play-icon"
                                                    onClick={openModal2}
                                                >
                                                    <i
                                                        style={{
                                                            color: '#D7D6D5',
                                                            cursor: 'pointer',
                                                        }}
                                                        className="far fa-play-circle fa-2x"
                                                    ></i>
                                                </div>
                                            </div>
                                        )}
                                        {data[2] && (
                                            <div className="video padding-top">
                                                <Lazyload
                                                    key={data[2].id}
                                                    height={100}
                                                    offset={[-100, 100]}
                                                    placeholder={<Spinner />}
                                                >
                                                    <img
                                                        src={data[2].image}
                                                        alt=""
                                                        className="img-fluid pb-3"
                                                        onClick={openModal3}
                                                    />
                                                </Lazyload>
                                                <div
                                                    className="play-icon"
                                                    onClick={openModal3}
                                                >
                                                    <i
                                                        style={{
                                                            color: '#D7D6D5',
                                                            cursor: 'pointer',
                                                        }}
                                                        className="far fa-play-circle fa-2x"
                                                    ></i>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-sm-6">
                                        {data[3] && (
                                            <div className="video">
                                                <Lazyload
                                                    key={data[3].id}
                                                    height={100}
                                                    offset={[-100, 100]}
                                                    placeholder={<Spinner />}
                                                >
                                                    <img
                                                        src={data[3].image}
                                                        alt=""
                                                        className="img-fluid pb-3"
                                                        onClick={openModal4}
                                                    />
                                                </Lazyload>
                                                <div
                                                    className="play-icon"
                                                    onClick={openModal4}
                                                >
                                                    <i
                                                        style={{
                                                            color: '#D7D6D5',
                                                            cursor: 'pointer',
                                                        }}
                                                        className="far fa-play-circle fa-2x"
                                                    ></i>
                                                </div>
                                            </div>
                                        )}
                                        {data[4] && (
                                            <div className="video padding-top">
                                                <Lazyload
                                                    key={data[4].id}
                                                    height={100}
                                                    offset={[-100, 100]}
                                                    placeholder={<Spinner />}
                                                >
                                                    <img
                                                        src={data[4].image}
                                                        alt=""
                                                        className="img-fluid"
                                                        onClick={openModal5}
                                                    />
                                                </Lazyload>
                                                <div
                                                    className="play-icon"
                                                    onClick={openModal5}
                                                >
                                                    <i
                                                        style={{
                                                            color: '#D7D6D5',
                                                            cursor: 'pointer',
                                                        }}
                                                        className="far fa-play-circle fa-2x"
                                                    ></i>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="d-flex justify-content-center xs-width mt-5">
                    <Button className="btn-custom-outline">আরও দেখুন</Button>
                </div> */}
                    </div>
                </>
            )}
        </section>
    )
}

export default VideoGallery
