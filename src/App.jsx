import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';



function App() {

  let sectios = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav li a');

  window.onscroll = () => {
    sectios.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
          })
      }
    })
  };


  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation()

  useEffect(() => {
    // if (isInView) {
    //   mainControls.start("visible");
    // }
  } ,[])

  return (
    <>
        <Header/>
        < motion.main
          ref={ref}
        >
        <About/>
        <Services/>
        < Projects />
        <Contact/>
        <Footer/>
        </motion.main>
       
    </>
  )
}

export default App
