import React from 'react';
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
        </div>
    )
}

export default SkeletonPosts;