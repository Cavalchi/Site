import './App.css';
import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import EmailModal from "./components/EmailModal";


function App() {
  return (
    <div className="layout">
     <header className="custom-header">
        <div className="profile-photo"></div>
        <div className="header-text">
          <h1>João Pedro Cavalchi de Carvalho</h1>
          <h2>Data Scientist | Performance & Strategy</h2>
          <div className="download-button">
            <a href="/cv.pdf" download>Download Resume</a>
          </div>
        </div>
      </header> 
      
      <About />
   
      <main className="main-content">
       <Projects />
        <Contact />
  </main>
  
    <footer class="footer">
      <div class="footer-info">© 2025   João Pedro Cavalchi de Carvalho  </div>
        <div class="social-icons">
          <EmailModal/>
          <a href="https://github.com/Cavalchi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.256c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/cavalchi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.44 8h4.12v12H.44V8zM7.34 8h3.94v1.71h.06c.55-1.04 1.89-2.14 3.9-2.14 4.17 0 4.94 2.75 4.94 6.33V20H15.1v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V20H7.34V8z"/>
            </svg>
          </a>
      </div>
    </footer>
  </div>


  );
}

export default App;
