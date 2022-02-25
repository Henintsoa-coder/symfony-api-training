import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
import Posts from './Posts'
import Users from './Users'
import Navbar from './Navbar'
import Accueil from './Accueil'

export default function Home() {
  return (
      <div>
          <Navbar></Navbar>
          <Routes>
              <Route path="/" element={<Accueil />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </div>
  )
}
