import React from "react";
import { useParams } from "react-router-dom";
import "./DetailBook.css";
import { ListBook } from "../../assets/dummy/ListBook";

const DetailBook = () => {
  const { id } = useParams();
  const listBook = ListBook.filter((list) => list.id == id);
  return (
    <div>
      <h4>Detail Book ID: {id}</h4>
      <h4>Title : {listBook[0].title}</h4>
    </div>
  );
};

export default DetailBook;
