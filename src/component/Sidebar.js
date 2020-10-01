import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo, User } from "../assets/images";
import { LibraryContex } from "../context/libraryContext";
import { Grid, Icon } from "semantic-ui-react";

function Sidebar() {
  const [state, dispatch] = useContext(LibraryContex);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <Grid.Column width={3}>
      <div className="sidebar-container">
        <img src={Logo} alt="logo" />
        <div className="user">
          <img src={User} alt="user" />
          <h4>Irwanto</h4>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Icon name="user" className="icon" />
              <Link to="/profile" className="link">
                Profile
              </Link>
            </li>
            <li>
              <Icon name="book" className="icon" />
              <Link to="/my-library" className="link">
                My Library
              </Link>
            </li>
            <li>
              <Icon name="copy" className="icon" />
              <Link to="/add-book" className="link">
                Add Book
              </Link>
            </li>
            <li>
              <Icon name="sign-out" className="icon" />
              <button onClick={() => handleLogout()} className="link-logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Grid.Column>
  );
}

export default Sidebar;
