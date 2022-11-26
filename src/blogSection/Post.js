import React from 'react';
import './Post.css'

const Post = ({ post }) => {
    const { firstPart, secondPart, thirdPart, title, author, imgUrl } = post;
    return (
        <div>
            <div className="blog-text">
                <div className="my-3">
                    <h1 className='text-center text-4xl font-semibold text-orange-600'>{title}</h1>
                    <p className='text-2xl text-white text-center'><small>Author: {author}</small></p>
                </div>
                <div>
                    <img className='postImg' src={imgUrl} alt="" srcset="" />
                </div>
                <div className="my-5">
                    <p className='txt'>{firstPart}</p>
                    <p className='txt'>{secondPart}</p>
                    {
                        thirdPart && <p className='txt'>{thirdPart}</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default Post;