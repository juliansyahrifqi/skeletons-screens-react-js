import React from 'react';
import '../index.css';

const Post = ({ post }) => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    
    return (
        <div className="card">
            <img src={post.coverImage} alt={post.title}></img>
            <h2>{post.title}</h2>
            <p className="date">{new Date(post.dateAdded).toLocaleDateString('id', options)}</p> 
            <hr></hr>
            <p>{post.brief}</p>
        </div>
    )
}

export default Post;