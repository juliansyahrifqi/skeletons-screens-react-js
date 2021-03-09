import React from 'react';
import './Skeleton.css';

const Skeleton = ({ element }) => {
    const classElement = `skeleton ${element}`;

    return (
        <div className={classElement}></div>
    )
};

export default Skeleton;