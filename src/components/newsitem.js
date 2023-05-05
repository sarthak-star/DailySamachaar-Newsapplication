import React from 'react';
import './newsitem.css';

const NewsItem = ({ title, desc, imgurl, newsurl, author, source }) => {
  return (
    <div className="card">
      <span className="position-absolute top-0 translate-middle badge rounded-pill " style={{ zIndex: 1, left: '90%',backgroundColor:'#674188' }}>
        {source}
      </span>
      <img src={imgurl} className="card-img-top" alt="sorry" />
      <div className="card-body" style={{backgroundColor:'#C3ACD0',color:'#674188'}}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}.....</p>
        <p className="card-text small-text">Published by - {author ? author : "Unkown"}</p>
        <a href={newsurl} style={{backgroundColor:'#674188',border:'0px',color:'#F7EFE5'}} target='_blank' rel="noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
