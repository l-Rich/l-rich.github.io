import './LandingPage.css'
import profile from './profile.png'
import linkedin from './linkedin-icon.png'
import github from './github-icon.png'
import { Link } from 'react-router-dom'



function LandingPage (){

    return (
        <div class="landing">
            <div class="left">
                <h3 class="header-top">I am Lauren Richardson.</h3>
                <h3 class="header-bottom">I build things on the web.</h3>
                <p>I am passionate about identifying and solving complex tasks and problems. I take ideas from concept to complete.</p>            
                <div class="buttons">
                    <a href="https://github.com/l-Rich/" target="_blank"><button>Github</button></a>
                    <Link to="/resume">
                        <button>Resume</button>
                    </Link>
                </div>
            </div>
            <div class="right">
                <img src={profile} class="profile"></img>
            </div>
        </div>
      );
}

export default LandingPage
	