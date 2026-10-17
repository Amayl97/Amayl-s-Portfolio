import "../css/home.css";

export default function Home(){
    return(
     <section className="homeSection" id="home">
        {/* Navbar */}
       <div className="navbar">
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li id="name">Amayl</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
       </div>

       <div className="hero">
          <img src="../src/assets/autumn_picnic-3.gif" alt="" />
          <div className="introText">
          <p className="intro">Hello, I'm Amayl.<br/>I’m a software engineer who<br/>loves coffee and winter mornings.<br/> I love turning ideas into code, creating <br/>cute websites, and exploring the intersection <br/>of technology and creativity. Always dreaming,<br/> always building, and always finding new ways<br/> to make the digital world a little more magical.</p>
          </div>
       </div>
     </section>
    );
}