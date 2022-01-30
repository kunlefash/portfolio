import "./intro.css"
import me from "../../img/me.JPG"

const Intro = () => {
  return <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Fasakin Adekunle Opeyemi </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">React Frontend Developer</div>
              <div className="i-title-item">NodeJs Backend Developer</div>
              <div className="i-title-item">MongoDB</div>
              <div className="i-title-item">MERN Stack</div>
            </div>
          </div>
          <div className="i-desc">
            I am a Fullstack (MERN) web developer. I design and develop services of all kinds specializing in creating a modern, stylish websites, web services.
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={me} alt="" className="i-img" />
      </div>
  </div>;
};

export default Intro;
