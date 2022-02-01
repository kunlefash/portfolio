import "./about.css"
import Random from "../../img/random.png"
const About = () => {
  return <div className='about'>
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/4617961/pexels-photo-4617961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I am a student of the federal university of Technology, Akure. A computer engineering student from Nigeria
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempore aliquam aliquid maiores officia harum, asperiores repudiandae blanditiis, corrupti cupiditate optio. Corrupti omnis distinctio, necessitatibus sunt fugit pariatur possimus accusamus.
            </p>
            <div className="a-award">
                <img src={Random} alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">
                        Dopest developer Alive(Zombie award)
                    </h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quidem, in deleniti debitis placeat cumque. Iste dicta facere, in vel expedita quibusdam deserunt ipsam perferendis quisquam quasi numquam dolorem amet.
                    </p>
                </div>
            </div>
    </div>
  </div>;
};

export default About;

