import React, { useContext } from "react";
import { LibraryContex } from "../../context/libraryContext";
import { Grid, Icon, Segment, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Logo, User } from "../../assets/images";
import "./Home.css";
import { Fix } from "../../assets/images/book";

import { ListBook } from "../../assets/dummy/ListBook";

function Login() {
  const [state, dispatch] = useContext(LibraryContex);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  console.log(state);

  return (
    <div className="container">
      <div className="jumbotron">
        <Segment.Group>
          <Responsive as={Segment} style={{ backgroundColor: "#e6f2fd" }}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={11}>
                  <div className="book-title">
                    <h1 className="jumbotron-title">
                      Share, read and <em>love</em>
                    </h1>
                    <p>Reading is fascinating</p>
                  </div>
                </Grid.Column>
                <Grid.Column width={5}>
                  <img src={Fix} alt="book" className="jumbotron-img" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Segment.Group>
      </div>

      <div className="list-book">
        <div className="list-title">
          <h3>List Book</h3>
        </div>
        <div className="list-link">
          <Link className="btn-list">Back to Category</Link>
        </div>
      </div>

      <Grid>
        {ListBook.map((book) => {
          return (
            <Grid.Column width={4} key={book.id}>
              <Link to={`/detail/${book.id}`}>
                <img
                  src={book.image}
                  className="book-category book-list"
                  alt="data buku"
                />
              </Link>
              <div className="title">
                <h2>{book.title}</h2>
              </div>
              <div className="author">
                <p>{book.author}</p>
              </div>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default Login;
