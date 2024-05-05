import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home } from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { User } from './components/User/User.jsx'
import { Github } from './components/Github/Github.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}/ >
      
      <Route path='About' element={<About></About>} />
      <Route path='Contact' element={<Contact></Contact>} />
      <Route path='User/' element={<User></User>}>
      <Route path=':userid' element={<User></User>}>
        </Route> 
       </Route> 
       <Route path='Github' element={<Github></Github>} />

    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
