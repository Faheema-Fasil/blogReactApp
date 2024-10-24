import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import PostDetails from  './Pages/PostDetails.jsx'
import Register from './Pages/Register.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import Authors from './Pages/Authors.jsx';
import CreatePost from './Pages/CreatePost.jsx';
import CategoryPosts from './Pages/CategoryPosts.jsx';
import AuthorPosts from './Pages/AuthorPosts.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import EditPost from './Pages/EditPost.jsx';
import Logout from './Pages/Logout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children: [
      {index:true,element:<Home/>},
      {path:"posts/:id",element:<PostDetails/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
      {path:"profile/:id",element:<UserProfile/>},
      {path:"authors",element:<Authors/>},
      {path:"create",element:<CreatePost/>},
      {path:"posts/categories/:category",element:<CategoryPosts/>},
      {path:"posts/users/:id",element:<AuthorPosts/>},
      {path:"myposts/:id",element:<Dashboard/>},
      {path:"posts/:id/edit",element:<EditPost/>},
      {path:"logout",element:<Logout/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)
