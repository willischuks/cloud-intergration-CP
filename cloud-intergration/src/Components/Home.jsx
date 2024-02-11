import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/anime-rapper.webp";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Home.css"; // Import the CSS file

const Home = () => {
    // basic landing page
    return (
        <div className="home-about-section">
        <div className="card mx-auto" style={{ maxWidth: "800px" }}>
            <div className="card-body row align-items-center no-gutters">
            <div className="col-md-5 d-flex align-items-center justify-content-center">
                <Tilt tiltMaxAngle={5}>
                <img src={myImg} alt="avatar" className="img-fluid rounded-circle shadow" style={{ border: "2px solid #d0d0d0" , width: "20%"}} />
                </Tilt>
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-between">
                <h1 className="card-title display-4">
                LET ME <span className="text-accent">INTRODUCE</span> MYSELF
                </h1>
                <p className="card-text">
                I fell in love with programming and have at least learned something, I think...<br />
                <br />
                I am fluent in classics like <em><b>HTML, Javascript and CSS</b></em>.
                <br />
                <br />
                My field of interest's are building new <em><b>Web Technologies and Products</b></em> and also in areas related to <em><b>Blockchain</b></em>.
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with <em><b>Node.js</b></em> and <em><b>Modern Javascript Library and Frameworks</b></em> like <em><b>React.js and Next.js</b></em>.
                </p>
                <div className="social-links d-flex align-items-center">
                <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer">
                    <FaGithub className="me-3 icon-color" size={24} />
                </a>
                <a href="https://twitter.com/Soumyajit4419" target="_blank" rel="noreferrer">
                    <FaTwitter className="me-3 icon-color" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="me-3 icon-color" size={24} />
                </a>
                <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noreferrer">
                    <FaInstagram className="icon-color" size={24} />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
);
};

export default Home;