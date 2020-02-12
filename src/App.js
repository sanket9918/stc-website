import React, { Component } from 'react'
import NavBar1 from './navbar.component';
import Hero from './main-hero.component';
import About from './about.component';
import Projects from './projects.component';
import Contact from './contact.component';


class App extends Component{
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

  render()
  {
    return(
      <>
      <NavBar1 />
      <Hero />
      <About />
      <Projects />
      <Contact />
      </>
    )
  }
  
}
export default App