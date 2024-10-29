import React from 'react'
import PostAuthor from '../componets/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/blog22.jpg'


function PostDetails() {
  return (
    <>
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
             <Link to={`/post/werwer/edit` } className='btn sm primary' >Edit</Link>
             <Link to={`/post/werwer/delete` } className='btn sm danger' >Delete</Link>
          </div>
        </div> 
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, adipisci distinctio! Cupiditate, beatae reprehenderit ad quasi autem voluptatum sunt error illo amet similique voluptas aut mollitia necessitatibus voluptate quas. Neque!

        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae rerum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero sapiente ducimus sit dolorem nam mollitia modi culpa numquam inventore consequatur nesciunt aperiam cum nemo eligendi. At odit nihil nam debitis fugit excepturi quae molestiae? Culpa, error porro. Maxime assumenda fuga labore recusandae sint quibusdam voluptates at placeat eos debitis minus, voluptatem officiis deleniti distinctio explicabo? Sunt consequuntur excepturi quam quod impedit perspiciatis! Dignissimos, iure, est veniam velit saepe tempora molestiae praesentium dolore, ipsa accusantium laboriosam! Similique quo omnis non perspiciatis ipsum impedit temporibus voluptatibus, illo fugit nobis tenetur consectetur, expedita asperiores ea eaque quod? Enim molestias nemo atque quae ex nesciunt itaque unde at aspernatur, laudantium ab soluta explicabo minus?</p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti fugiat officia!
      </p>
      </div>
     
    </section>
      
    </>
  )
}

export default PostDetails
