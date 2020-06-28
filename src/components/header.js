import React from "react"
import { Link } from "gatsby"
import Particles from 'react-particles-js';

export default () => (
  <header className="header">
  <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
  <Particles 
    params={{ 
      particles: { 
        number: { 
          value: 100, 
          density: { 
            enable: true, 
            // value_area: 1000, 
          } 
        }, 
      }, 
    }} 
  /> 
  <div className="container">
    <div className="site">
      <Link to={`/`}>
        <h1 className="logoTitle">Orfool inc.</h1>
      </Link>
    </div>
    <nav className="nav">
      <ul>
        <li><Link to={`/`}>HOME</Link></li>
        <li><Link to={`/service/`}>SERVICE</Link></li>
        <li><Link to={'/about/'}>ABOUT</Link></li>
        <li><Link to={'/blog/'}>BLOG</Link></li>
        <li><Link to={'/contact/'}>CONTACT</Link></li>
      </ul>
    </nav>
    </div>
    <section className="hero">
      <div className="catch">
        <h1>TRY ALL, ENJOY ALL<br /><p>テクノロジーの力であなたの仕事をサポートします！</p></h1>
      </div>
    </section>
  </header>
)