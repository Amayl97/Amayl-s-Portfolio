import "../css/about.css";
import cloudsImg from "../assets/clouds.jpg"
import pfpImg from "../assets/pfp.jpg"
export default function About(){
    return(
     <section id="aboutSection">
          <div className="aboutMe gridDiv">
            <img src={cloudsImg} alt="clouds image" className="aboutImg" />
            <p>I’m a 21-year-old IT student at Punjab University in Pakistan.<br/>I’ve always loved creating things through art, <br/> writing, and technology. After studying pre-engineering, <br/> I pursued a BS in IT and discovered a passion<br/>  for designing minimal, beautiful websites. <br/> I believe every website should have a personality of its own.</p>
          </div>
          <div className="edu gridDiv">
    
            <p>I have experience with React.js, Spring Boot, and Python,<br/> and I’m always open to collaboration. Feel free to reach out <br/>via email.</p>
            <img src={pfpImg} alt="cute image" className="aboutImg"/>
          </div>
     </section>
    );
}