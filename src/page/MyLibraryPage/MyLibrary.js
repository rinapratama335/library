import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { ListBook } from "../../assets/dummy/ListBook";
import "./MyLibrary.css";

const MyLibrary = () => {
  return (
    <div className="my-library">
      <Grid>
        <h1 class="my-library-title">My Library</h1>
        <Grid.Row>
          {ListBook.map((book) => {
            return (
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <div className="my-book-container" key={book.id}>
                  <Link to={`/detail/${book.id}`}>
                    <img
                      src={book.image}
                      alt="my book image"
                      className="my-book-image"
                    />
                  </Link>
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                </div>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MyLibrary;
