import React from 'react'
import Lazyload from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'

import "./AvatarCard.scss"

const AvatarCard = ({ id, src, name }) => {
    return (
        <div className="avatar-card">
            <div className="rounded-image">
                <Lazyload
                    key={id}
                    height={100}
                    offset={[-100, 100]}
                    placeholder={
                        <Skeleton circle={true} height={119} width={118} />
                    }
                >
                    <img src={src} alt="" className="img-fluid" />
                </Lazyload>
            </div>
            <p>{name}</p>
        </div>
    )
}

export default AvatarCard
