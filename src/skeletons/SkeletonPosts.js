import React from 'react';
import Shimmer from './Shimmer';
import Skeleton from './Skeleton';
import './Skeleton.css';

const SkeletonPosts = () => {
    return (
        <div className="skeleton-posts">
            <Skeleton element="image" />
            <Skeleton element="title" />
            <Skeleton element="date" />
            <hr></hr>
            <Skeleton element="text" />
            <Skeleton element="text" />
            <Skeleton element="text" />
            <Shimmer />
        </div>
    )
}

export default SkeletonPosts;