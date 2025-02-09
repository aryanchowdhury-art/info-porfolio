import { useRef, useEffect } from "react";
import "./home.css";

function Home() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = skillsRef.current;

    if (!scrollContainer) return;

    let speed = 1; // Adjust speed here for smoothness

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset to beginning for infinite effect
      } else {
        scrollContainer.scrollLeft += speed; // Move right continuously
      }
    };

    const interval = setInterval(scroll, 20); // Adjust interval for smoothness

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="overlay">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I am <span className="highlight">T. Aryan Kumar Chowdhury</span>, a passionate developer specialized in AI and front-end development.
          </p>
        </div>
        <img src="src/pages/aryanimage.jpg" alt="Portfolio Background" className="background-image" />
      </section>

      <section className="about-me">
        <div className="content">
          <h2>About Me</h2>
          <p>
            I have a strong background in developing intelligent systems and creating engaging front-end experiences.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container" ref={skillsRef}>
            {[...Array(2)].map((_, i) => ( // Duplicate items for infinite loop
              [
                "AI", "Machine Learning", "Deep Learning", "NLP", "React", "Node.js", "MongoDB", 
                "JavaScript", "Python", "CSS", "HTML", "Express.js", "TensorFlow", "Keras", "PyTorch", "C", "C++", "Java", "SQL",
              ].map((skill, index) => (
                <div key={`${i}-${index}`} className="skill-box">{skill}</div>
              ))
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 T. Aryan Kumar Chowdhury. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
