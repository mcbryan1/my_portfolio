import React from "react";
import "./homepage.css";
import image from "../../images/solomon.jpeg";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Socialicons from "../socialicons/Socialicons";

export default function Homepage() {
  return (
    <div className="container-fluid main__homepage">
      <div className="row">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid img-circle image"
            alt="solomon"
          />
        </div>
        <div className="col-md-6">
          <div className="intro text-center">
            <div className="text-center">
              <img
                alt="Hi and Bye"
                src="http://www.sherv.net/cm/emoticons/bye/hi-and-bye-smiley-emoticon.gif"
                className="emoji text-center"
              />
            </div>

            <h3>
              <span>McBryan Solomon.</span>
            </h3>
            <div className="typed__js">
              <Typed
                strings={[
                  "I am a Web Developer.",
                  "I am a Mobile Apps Developer.",
                  "I am a Front End Developer.",
                  "I am a Graphic Designer.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                style={{
                  fontFamily: "Lato",
                  fontSize: "1.5rem",
                  color: "#aaa",
                }}
              />
            </div>
            <div className="personal__info">
              <p className="text-left">
                Based in Ghana, I am Currently undergoing training at{" "}
                <a href="https://codetraingh.com" className="linker">
                  Codetrain Gh
                </a>
                . As a freelancer, I've worked on lots of{" "}
                <Link to="/portfolio" className="linker">
                  Projects
                </Link>
                . I am also a core member of{" "}
                <a href="https://creatorhome.herokuapp.com" className="linker">
                  The Creator Home
                </a>
                , a remote startup based in India.
              </p>
              <div className="blockquote">
                <blockquote className="text-left">
                  Truth can be found at only one place; the code.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 text-center">
          <Socialicons />
        </div>
      </div>
    </div>
  );
}
