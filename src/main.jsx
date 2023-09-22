import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import './index.css';
import Home from './Components/Home/Home';
import About from './Components/About/About.jsx/About';
import Contact from './Components/Conatct/Contact';
import Users from './Components/Users/Users';
import Usersdetails from './Components/UsersDetails/Usersdetails';
import UsersMore from './Components/UsersMore/UsersMore';
import Posts from './Components/Posts/Posts';
import Post from './Components/Post/Post';
import Error from './Components/Eorror/Error';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>

      },{
        path:'/contact',
        element:<Contact></Contact>
      },{
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        
        element:<Users></Users>
      },{
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Usersdetails></Usersdetails>
      },{
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UsersMore></UsersMore>
      },{
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },{
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Post></Post>
      },
    ]
  },
  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
