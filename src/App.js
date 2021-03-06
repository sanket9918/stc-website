import React, { Component } from "react";
import NavBar1 from "./navbar.component";
import Hero from "./main-hero.component";
import About from "./about.component";
import Projects from "./projects.component";
import Contact from "./contact.component";
import Team from "./team.component";
import Footer from "./footer.component";
import Testimonial from "./testimonial.component";
import MLSA from "./msp.component";
import App_promo from "./app_promo.component";

class App extends Component {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

  render() {
    return (
      <>
        <NavBar1 />
        <Hero />
        <About />
        <Projects />
        <Testimonial />
        <MLSA />
        <Team />
        <App_promo />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
