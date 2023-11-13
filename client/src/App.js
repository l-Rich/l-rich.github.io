import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LandingPage from './LandingPage'
import Resume from './Resume'
import Nav from './nav'
import Blog from './Blog'
import Portfolio from './Portfolio'



function App() {
  return (
    <>

<BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
</BrowserRouter></>
  );
}

export default App;
