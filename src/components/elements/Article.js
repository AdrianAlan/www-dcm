import React from "react";

function Article(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title subtitle">{props.title}</p>
        </a>
      </div>
      <div className="card-image">
         <figure class="image is-4by3">
             <img src={props.image} alt="" />
         </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{props.extract}</p>
        </div>
        <a href={props.url} target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default Article;
