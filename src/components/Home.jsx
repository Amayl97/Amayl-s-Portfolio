import "../css/home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
   function handleScrolling(){
    const lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
        if(line.getBoundingClientRect().top < 400){
            line.style.opacity = 1;      
        }
        else{
            line.style.opacity = 0.6;
        }
    })

   }
   window.addEventListener("scroll", handleScrolling);

return () => {
  window.removeEventListener("scroll", handleScrolling)
};

}, []);


  return (
    <section className="homeSection" id="home">
      {/* Navbar */}
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="projectSection">Projects</a>
          </li>
          <li id="name">Amayl</li>
          <li>
            <a href="#aboutSection">About</a>
          </li>
          <li>
            <a href="#footerSection">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hero">
        <img src="../src/assets/autumn_picnic-3.gif" alt="" />
        <div className="introText">
          <p className="intro">
            <span className="line name">Hello, I'm Amayl.</span>
            <span className="line lin">I’m a software engineer who loves</span>
            <span className="line">coffee and winter mornings.</span>
            <span className="line">
              I love turning ideas into code, creating
            </span>
            <span className="line">
              cute websites, and exploring creativity.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
