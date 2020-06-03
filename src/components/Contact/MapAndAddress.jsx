import React from 'react'

import "./MapAndAddress.scss"

const MapAndAddress = () => {
    return (
        <section className="map-and-address">
            <div className="section-padding-top-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 shadow margin-bottom">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1826.5788827045994!2d90.4119429!3d23.7060595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90781abd9ed%3A0xd5bf41997328ce!2sGuardian%20Publications!5e0!3m2!1sen!2sbd!4v1579505066575!5m2!1sen!2sbd"
                                    title="guardian's-google-map"
                                    width="550"
                                    height="300"
                                    style={{ border: 0 }}
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 padding-left">
                            <h4>গার্ডিয়ান (হেড অফিস)</h4>
                            <p className="address">
                                ৩৪, নর্থব্রুক হল রোড, (২য় তলা)
                                <br />
                                বাংলাবাজার, ঢাকা-১১০০
                                <br />
                                টেলিফোনঃ ০২-৫৭১৬৫৫১৭
                                <br />
                                মোবাইলঃ ০১৭১০-১৯৭৫৫৮, ০১৯৯৮-৫৮৪৯৫৮
                                <br />
                                ইমেইলঃ guardianpubs@gmail.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapAndAddress
