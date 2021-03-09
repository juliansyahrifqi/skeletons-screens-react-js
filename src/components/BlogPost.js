import React, { useState, useEffect } from "react";
import Post from './Post';
import SkeletonPosts from '../skeletons/SkeletonPosts';

const query = `
    {
      user(username: "juliansyahrifqi") {
        publication {
          posts{
            dateAdded
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

const BlogPost = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
            const responseData = await response.json();

            setPosts(responseData.data.user.publication.posts);
        }, 4000);
    });

    return (
        <div className="blog-post">
            {posts && (
                <div className="card-container">
                    {posts.map((post, index) => (
                        <a key={index}
                           href={`https://juliansyahrifqi.hashnode.dev/${post.slug}`}
                        >
                            <Post post={post} />
                        </a>
                    ))}
                </div>
            )}

            {!posts && (
                <div className="skeleton-wrapper"> 
                    {[1, 2, 3, 4, 5, 6].map((n) => <SkeletonPosts key={n} />)}
                </div>
            )}  
        </div>
    )
}

export default BlogPost;