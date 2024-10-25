import React, { useState } from 'react'
import Thumbnail1 from '../assets/blog1.jpg' 
import Thumbnail2 from '../assets/blog2.jpg' 
import Thumbnail3 from '../assets/blog3.jpg' 
import Thumbnail4 from '../assets/blog4.jpg' 
import PostItem from './PostItem'



const DUMMY_POSTS =[
    {
        id:'1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'Empowering Futures Through Lifelong Learning',
        desc:'Education is more than just textbooks and classrooms; its the foundation of personal and societal growth. It empowers individuals to reach their potential, fosters critical thinking, and builds skills that shape careers and lives. Through education, we gain the tools to solve complex problems, adapt to changes, and create innovative solutions that improve our communities.',
        authorID: 3
    },
    {
        id:'2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'Unlocking the World Through Science',
        desc:'Science is all about curiosity and the pursuit of knowledge. It drives us to ask questions, seek answers, and discover how our world works. From the vastness of space to the tiniest particles, science opens up endless possibilities for exploration. Its a journey of constant learning that fuels innovation and helps us solve real-world problems.',
        authorID: 1
    },
    {
        id:'3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'The Fascinating World of Weather: More Than Just a Forecast',
        desc:'When you hear the word “weather,” the first thing that probably comes to mind is a sunny, rainy, or snowy forecast. But weather is more than just a daily update; it’s an intricate system that shapes ecosystems, impacts human activity, and connects us to the environment. From the majestic power of thunderstorms to the delicate balance of seasonal changes, weather tells the story of Earth’s dynamic atmosphere.',
        authorID: 13
    },
    {
        id:'4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'The Heart of Farming: Nourishing the World, Sustaining the Future',
        desc:'Farming is more than just planting seeds; its a labor of love that sustains communities and drives economies. Farmers work tirelessly to bring fresh food from the soil to our tables, balancing tradition with innovation to meet growing demands. As stewards of the land, they play a crucial role in protecting our environment, managing resources responsibly, and supporting biodiversity.',
        authorID: 11
    },
]
function Posts() {
    const[posts,setPosts]=useState(DUMMY_POSTS)
  return (
   <section className='posts'>
    {
        posts.map(()=><PostItem/>)
    }
   </section>
  )
}

export default Posts
