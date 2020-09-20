import React from "react";
import "./screens.css";
import Navbar from "../components/navbar/Navbar";
import Particles from 'react-particles-js';
import Homepage from "../components/homepage/Homepage";
import Footer from "../components/footer/Footer";


export default function HomeScreen() {
  return (
    <div className="main__home container-fluid">
     <Particles
          params={{
            particles: {
              number: {
                value: 35,
              },
              size: {
                value: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
      <div className="row">
       
        <div className="col-md-1"></div>
        <div className="col-md-10 home__page">
          <div className="card">
            <Navbar />
            <Homepage/>
            <Footer/>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}
