import React, { useState } from 'react'
import { DUMMY_POSTS } from '../Data'
import PostItem from '../componets/PostItem'

function CategoryPosts() {
  const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <>
      <section className='author-posts'>
          {posts.length>0 ? <div className="container author-posts__container">
            {
                posts.map(({id,thumbnail,category,title,desc,authorID})=>
                <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} description={desc} title={title} authorID={authorID} />)
            }
    </div> : <h2 className='center'>No Posts Found</h2> }
    
   </section>
    </>
  )
}

export default CategoryPosts
