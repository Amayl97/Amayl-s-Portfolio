import "../css/projects.css";

export default function Projects() {
  return (
    <section id="projectSection">
      <h3 className="headingProject">Project Gallery</h3>

      <div className="showcase">
        <div className="projectDiv">
          <div className="project">
            <img src="../src/assets/coffee.jpg" alt="" className="projectImg" />
            <p>Websites</p>
            <p>Built with love</p>
          </div>

          <ul className="projectList">
            <li>
              <a href="https://github.com/Amayl97/Layover-Web-App.git" target="_blank">Layover:</a> A virtual photo booth featuring photo
              layouts, stickers, and downloadable photo strips. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/College-Hub.git" target="_blank">College Hub:</a> A student-focused website designed to
              make college-related information easier to access. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/Halal-Food-Scanner.git" target="_blank">Halal Food Scanner:</a> A food-scanning concept
              designed to help users check product ingredients and identify
              potentially non-halal ingredients. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/Dayloom.git" target="_blank">Dayloom:</a> A mindful productivity experience
              encouraging users to take breaks and build healthier screen-time
              habits. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/Habit-Tracker-in-ReactJs.git" target="_blank">Habit Tracker:</a> A simple habit-tracking application
              designed to help users build routines and monitor their daily
              progress. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/Photo-Booth_Workshop-Project.git" target="_blank">Photo Booth:</a> An interactive web photo booth
              inspired by Korean photo booths, with customizable layouts,
              stickers, and downloadable photos. ↗
            </li>

            <li>
              <a href="https://github.com/Amayl97/Interactive-Envelope-Card-Web-App.git" target="_blank">Interactive Envelope Web Card:</a> An interactive
              digital greeting card featuring an animated envelope that opens to
              reveal a personal message. ↗
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
