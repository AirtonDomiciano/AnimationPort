import React from "react";
import Header from "./components/Header";
import MenuSections from "./components/MenuSections";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import resumeData from "./resumeData";
export function App() {
  return (
    <div className="container">
      <MenuSections resumeData={resumeData} />
       <div className="portfolio"> 
        <Header resumeData={resumeData} />
        <div id="content" className="content">
          {/* <Home resumeData={resumeData} /> */}
          {/* <About resumeData={resumeData} /> */}
          {/* <Projects resumeData={resumeData} /> */}
          {/* <Experience resumeData={resumeData} /> */}
          {/* <Contact resumeData={resumeData} />  */}
        </div>
      </div> 
    </div>
  );
}

export default App;
