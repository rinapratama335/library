import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Dropdown, Image, Button, Icon, Table } from "semantic-ui-react";
import { LibraryContex } from "../../context/libraryContext";
import { Logo, ProfileUser } from "../../assets/images";
import "./AdminPage.css";
import { BookAdmin } from "../../assets/dummy/BookAdmin";

export default function AdminPage() {
  const [state, dispatch] = useContext(LibraryContex);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const trigger = (
    <span>
      <Image
        avatar
        src={ProfileUser}
        style={{ height: 50, width: 50, borderRadius: "100%" }}
      />
    </span>
  );

  return (
    <Grid style={{ height: "100vh" }}>
      <Grid.Row
        style={{
          paddingLeft: 40,
          paddingRight: 50,
          marginTop: 35,
        }}
      >
        <Grid.Column mobile={8} tablet={8} computer={8}>
          <img src={Logo} alt="logo" />
        </Grid.Column>
        <Grid.Column mobile={8} tablet={8} computer={8}>
          <Dropdown
            trigger={trigger}
            icon={null}
            style={{ paddingBottom: 7, paddingRight: 50, float: "right" }}
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="book">
                <Icon name="book" />
                <Link
                  to="/add-book"
                  style={{
                    textTransform: "capitalize",
                    color: "#000",
                    marginLeft: 20,
                  }}
                >
                  Add Book
                </Link>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Header icon="book">
                <Icon name="sign-out" />
                <Button
                  onClick={() => handleLogout()}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                >
                  Logout
                </Button>
              </Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
        <Grid.Column width={16} style={{ marginRight: 70 }}>
          <h1 className="title">Book Verification</h1>
          <Table celled selectable style={{ marginLeft: 5, paddingLeft: 10 }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>User or Author</Table.HeaderCell>
                <Table.HeaderCell>ISBN</Table.HeaderCell>
                <Table.HeaderCell>E-Book</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {BookAdmin.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.author}</Table.Cell>
                    <Table.Cell>{data.ISBN}</Table.Cell>
                    <Table.Cell>{data.ebook}</Table.Cell>
                    <Table.Cell
                      className={
                        data.status === "Approve" ? "approve" : "cancel"
                      }
                    >
                      {data.status}
                    </Table.Cell>
                    <Table.Cell>
                      {data.status === "Approve" ? (
                        <Icon
                          name="check circle"
                          size="big"
                          style={{
                            color: "#3BB54A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30%",
                          }}
                        />
                      ) : (
                        <>
                          <button className="btn-action btn-cancel">
                            Cancel
                          </button>
                          <button className="btn-action btn-approve">
                            Approve
                          </button>
                        </>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
