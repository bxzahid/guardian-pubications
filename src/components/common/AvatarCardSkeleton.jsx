import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const AvatarCardSkeleton = ({ color, highlightColor, margin }) => {
    return (
        <>
            <SkeletonTheme color={color} highlightColor={highlightColor}>
                <div className={margin}>
                    <Skeleton circle={true} height={119} width={118} />
                </div>
                <div className="mt-2 mb-4">
                    <Skeleton width={168} height={12} />
                </div>
            </SkeletonTheme>
        </>
    )
}

export default AvatarCardSkeleton
