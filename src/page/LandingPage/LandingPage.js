import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import { Header, Modal, Form } from "semantic-ui-react";
import { Logo } from "../../assets/images";
import "./LandingPage.css";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
        as={Form}
        // onSubmit={(e) => handleSubmit(e)}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Header
          icon="lock"
          content="Login"
          style={{
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
          as="h1"
          className="login-header"
        />
        <Modal.Content>
          <Form.Input
            label="Email"
            required
            type="email"
            placeholder="Your email"
          />
          <Form.Input
            label="password"
            required
            type="password"
            placeholder="Your password"
          />
          <Link
            to="/home"
            // type="submit"
            style={{
              backgroundColor: "#fba70b",
              paddingTop: 10,
              paddingRight: 73,
              paddingBottom: 10,
              paddingLeft: 73,
            }}
            icon="save"
          >
            Submit
          </Link>
        </Modal.Content>
        <Modal.Actions>
          <h3 style={{ textAlign: "center" }}>
            Don't hace an account? Click here
          </h3>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default LandingPage;
