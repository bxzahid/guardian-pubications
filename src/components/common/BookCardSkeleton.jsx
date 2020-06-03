import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BookCardSkeleton = () => {
    return (
        <>
            <Skeleton width={168} height={240} />
            <div className="mt-1">
                <Skeleton width={168} height={14} />
            </div>
            <div className="mt-1 mb-4 m-auto">
                <Skeleton width={168} height={14} />
            </div>
        </>
    )
}

export default BookCardSkeleton
