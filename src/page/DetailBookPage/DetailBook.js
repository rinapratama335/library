import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailBook.css";
import { ListBook } from "../../assets/dummy/ListBook";
import { Divider, Grid } from "semantic-ui-react";

const DetailBook = () => {
  const { id } = useParams();
  const listBook = ListBook.filter((list) => list.id == id);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={8}
            style={{
              display: "flex",
              aligItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={listBook[0].image} className="detail-img" />
          </Grid.Column>
          <Grid.Column width={8} className="detail-info">
            <h1>{listBook[0].title}</h1>
            <h4 className="author">{listBook[0].author}</h4>

            <h4>Publication Date</h4>
            <h5 className="author desc">{listBook[0].publication}</h5>

            <h4>Category</h4>
            <h5 className="author desc">{listBook[0].category}</h5>

            <h4>Pages</h4>
            <h5 className="author desc">{listBook[0].pages}</h5>

            <h4 class="isbn">ISBN</h4>
            <h5 className="author desc">{listBook[0].ISBN}</h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginLeft: 70 }}>
          <h1 className="about">About This Book</h1>
          <p className="description">{listBook[0].detail}</p>
          <div className="btn-desc">
            <Link className="btn btn-orange">Add Library</Link>
            <Link to="/readbook" className="btn btn-gray">
              Read Book
            </Link>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default DetailBook;
