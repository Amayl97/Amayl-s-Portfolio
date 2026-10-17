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
          <h3>Hello, My name is Amayl</h3>
       </div>
     </section>
    );
}