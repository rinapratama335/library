import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Icon } from "semantic-ui-react";
import "./AddBook.css";

const AddBook = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Add Book</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field style={{ marginBottom: 31 }}>
          <input type="text" placeholder="Title" name="title" ref={register} />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <input
            type="text"
            placeholder="Publication Date"
            name="publication"
            ref={register}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <input
            type="text"
            placeholder="Category"
            name="category"
            ref={register}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <input
            type="number"
            placeholder="Pages"
            name="pages"
            ref={register}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <input type="text" placeholder="ISBN" name="isbn" ref={register} />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <Form.TextArea
            placeholder="About This Book"
            name="description"
            ref={register}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: 31 }}>
          <Button
            as="label"
            htmlFor="file"
            type="button"
            style={{
              width: 240,
              paddingTop: 15,
              paddingBottom: 15,
              display: "flex",
              justifyContent: "center",
              fontSize: 16,
            }}
            size="medium"
          >
            Attache Book File
            <Icon name="attach" style={{ marginLeft: 20 }} size="large" />
          </Button>
          <input type="file" name="file" ref={register} hidden id="file" />
        </Form.Field>
        <Button
          size="large"
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight: 0,
            paddingLeft: 12,
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
            backgroundColor: "#ee4622",
            color: "#fff",
            float: "right",
          }}
        >
          Add Book
          <Icon size="large" name="book" style={{ marginLeft: 10 }} />
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
