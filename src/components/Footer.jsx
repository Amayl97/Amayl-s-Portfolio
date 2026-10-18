import "../css/footer.css";
import picnicGif from "../assets/autumn_picnic_v2.gif";

export default function Footer() {
  return (
    <section id="footerSection">
      <img src={picnicGif} alt="" className="bgGif" />

      <div className="footerContent">
        <h3>A little bit of code, a little bit of magic. ♡</h3>
        <p>Building thoughtful things with code and creativity.</p>

        <ul className="footerLinks">
          <li>
            <a href="mailto:amayltariq005@gmail.com">Email ↗</a>
          </li>
          <li>
            <a href="https://github.com/Amayl97" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amayl-tariq-b533b52a1/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
        </ul>

        <p className="copyright">© 2026 Amayl · Made with ♡ and coffee</p>
      </div>
    </section>
  );
}