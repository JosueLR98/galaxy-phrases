import React from "react";
import "./styles/ContainerInfo.css";
import Button from "./Button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <div>
      <section className="container">
        <h1 className="containerInfo_title">Info Galax</h1>
        <Button handleNewQuote={handleNewQuote} />
        <article className="containerInfo_phrase">
          <div className="sub_container"></div>
          <p>{quote.phrase}</p>
        </article>
        <article className="containerInfo_author">
          <h4>Fuente:{quote.author}</h4>
        </article>
      </section>
    </div>
  );
};

export default ContainerInfo;
