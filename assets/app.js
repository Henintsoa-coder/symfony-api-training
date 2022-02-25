import React from 'react'
import reactDom from 'react-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import './styles/app.css';
import './styles/home.css'

reactDom.render(
    <Router>
        <Home/>
    </Router>, 
    document.getElementById('root')
)

