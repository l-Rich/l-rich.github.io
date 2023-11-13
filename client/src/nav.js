import './nav.css'
import logo from './LR.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar () {

    return(
    <div class="nav">
        <img class="logo" src={logo} alt="logo"></img>
        <ul class="navbar">
            <Link to="/"><li class="tab">Home</li></Link>
            <Link to ="/blog"><li class="tab" href="#">Blog</li></Link>
            <Link to="/portfolio"><li class="tab" href="#">Portfolio</li></Link>
            <a href="https://www.linkedin.com/in/lauren-l-richardson" target="_blank"><li class="tab" href="#" >Contact</li></a>
        </ul>

    </div>
    )
}

export default Navbar