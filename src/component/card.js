import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ datas }) => {
  return (
    <div className="cards-datas">
      {datas && datas.map((news, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={news.uriimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <a href={news.url} className="btn btn-primary">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
