import React, { useState, useContext } from "react";
import { LibraryContex } from "../../context/libraryContext";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Logo } from "../../assets/images";
import "./LandingPage.css";
import "./Modal.css";

const LandingPage = () => {
  const [state, dispatch] = useContext(LibraryContex);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const { email, password } = formData;

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "irwanto@yahoo.com" && password === "irwanto") {
      console.log("LOGIN SUCCESS");
      dispatch({ type: "LOGIN" });
      history.push("/home");
    } else {
      console.log("LOGIN GAGAL");
    }
  };

  return (
    <>
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
              Sign-up today and receive unlimited accesss to all of your reading
              - share your book.
            </p>
          </Slide>

          <Shake>
            <button
              href="#about"
              className="button button-sign-in"
              onClick={() => setOpen(true)}
            >
              Sign In
            </button>

            <button href="#about" className="button button-register">
              Reigister
            </button>
          </Shake>
        </div>
      </div>

      {/* Modal Login */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <h2>Sign In</h2>
        <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="Input email......."
            className="input-login"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Input password......."
            className="input-login"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />

          <button type className="btn-submit">
            Submit
          </button>
        </form>
        <div className="regis-link">
          <p>
            Don't have an account? Click <Link>here</Link>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
