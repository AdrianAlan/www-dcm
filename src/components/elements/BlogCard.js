import React from "react";

function BlogCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img width="420" height="420" src={props.image} alt="" />
        </figure>
      </div>
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
        <a
          href={props.url}
          target="blank"
          className="card-header-icon"
          aria-label="Dev Community"
        >
          <span className="icon">
            <i className="fab fa-1x fa-medium"></i>
          </span>
        </a>
      </div>
     <div className="card-content">
        <h1 className="heading">Medium</h1>
        <div className="content">
          <p>{props.extract}</p>
        </div>
      </div>
      <div className="card-footer">
	<a href={props.url} target="blank" class="card-footer-item">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
