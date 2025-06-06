import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'


function PostItem(
  {postId,
  thumbnail,
  category,
  description,
  title,
  authorID}) {
    const shotDescription=description.length>145?description.substr(0,145)+ '...' : description;
    const postTitle=title.length>30?title.substr(0,30)+ '...' : title;
  return (
    
   <article className='post'>
    <div className="post__thumbnail">
      <img src={thumbnail} alt={title} />
      </div> 
      <div className="post__content">
         <Link to={`/posts/${postId}`}>
         <h3>{postTitle}</h3>
         </Link>
         <p>{shotDescription}</p>
         <div className="post__footer">
          <PostAuthor/>
          <Link to={`/posts/categories/${category} `} className='btn '>
          {category}
          </Link>
         </div>
      </div>
   </article>
  )
}

export default PostItem
