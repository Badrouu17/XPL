import React from "react";
import { Image } from "react-bootstrap";

const News = props => {
  if (props.data) {
    const { date, explanation, hdurl, title } = props.data;
    return (
      <div id="news">
        <h1>Daily News</h1>
        <div className="news-content">
          <h3>{title}</h3>
          <p> {explanation}</p>
          <Image src={hdurl} className="news-image" />
          <br />
          <i style={{ float: "right", marginTop: "20" }}>- {date}</i>
        </div>
      </div>
    );
  } else {
    return (
      <div id="news">
        <h1>Daily News</h1>
        <div className="news-content">
          <h3>NOT FOUND</h3>
        </div>
      </div>
    );
  }
};

export default News;
