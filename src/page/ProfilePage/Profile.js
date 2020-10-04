import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Gender, Mail, Phone, Map, ProfileUser } from "../../assets/images";
import "./Profile.css";
import { MyBooks } from "../../assets/dummy/MyBook";

const Profile = () => {
  return (
    <div>
      <h2 className="profile-title">Profile</h2>
      <div className="profile">
        <Grid>
          <Grid.Row className="item">
            <Grid.Column mobile={16} tablet={8} computer={8} className="item">
              <div className="item-wrapper">
                <div>
                  <img src={Mail} alt="icon" />
                </div>
                <div className="item-text">
                  <p className="bold">Irwanto@gmail.com</p>
                  <p className="light">Email</p>
                </div>
              </div>
              <div className="item-wrapper">
                <div>
                  <img src={Gender} alt="icon" />
                </div>
                <div className="item-text">
                  <p className="bold">Male</p>
                  <p className="light">Gender</p>
                </div>
              </div>
              <div className="item-wrapper">
                <div>
                  <img src={Phone} alt="icon" />
                </div>
                <div className="item-text">
                  <p className="bold">087838732012</p>
                  <p className="light">Mobile Phone</p>
                </div>
              </div>
              <div className="item-wrapper">
                <div>
                  <img src={Map} alt="icon" />
                </div>
                <div className="item-text">
                  <p className="bold">
                    Perumahan Permata Bintaro Residence C-3
                  </p>
                  <p className="light">Address</p>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="image-user">
                <img src={ProfileUser} alt="profil user" />
                <Button
                  style={{
                    backgroundColor: "#ee4622",
                    marginTop: 15,
                    width: "100%",
                    paddingTop: 13,
                    paddingBottom: 13,
                    paddingRight: 25,
                    paddingLeft: 25,
                    color: "#fff",
                  }}
                >
                  Change Photo Profile
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <h2 className="profile-title m-top">My Books</h2>

      <Grid>
        <Grid.Row>
          {MyBooks.map((book) => {
            return (
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <div className="my-book-container" key={book.id}>
                  <img
                    src={book.image}
                    alt="my book image"
                    className="my-book-image"
                  />
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

export default Profile;
