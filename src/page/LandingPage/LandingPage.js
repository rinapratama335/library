import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Shake from "react-reveal/Shake";
import { Logo } from "../../assets/images";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="col-md-12 col-lg-12 landing-container">
        <Fade>
          <img src={Logo} alt="logo" className="logo" />
        </Fade>
        <Slide left>
          <h1 className="title">
            Your Library <em className="gold">Anywhere</em>
          </h1>
        </Slide>
        <Slide right>
          <p className="paragraph">
            Sign-up today and receive unlimited accesss to all of your reading -
            share your book.
          </p>
        </Slide>

        <Shake>
          <button href="#about" className="button button-sign-in">
            Sign In
          </button>

          <button href="#about" className="button button-register">
            Reigister
          </button>
        </Shake>
      </div>
    </div>
  );
};

export default LandingPage;
