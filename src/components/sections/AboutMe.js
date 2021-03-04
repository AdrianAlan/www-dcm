import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section my-background" id="aboutMe">
	<div className="summary-text columns">
	  <div className="column is-4">
           <figure className="image container is-180x180">
            <img
             width="180px"
             height="180px"
             src={Resume.basics.picture}
             alt={Resume.basics.name}
             className="is-rounded"
             onError={(e)=>{e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}/> 
           </figure>
	  </div>
	  <div className="column is-10">
	  <h1 className="title has-text-gray-darker has-text-weight-bold my-name">{Resume.basics.name}</h1>
	  <h2 className="subtitle has-text-gray-darker has-text-weight-bold">{Resume.basics.title}
	  <p className="subtitle has-text-dark"> {Resume.basics.location.region}, {Resume.basics.location.country}</p>
	  </h2>
          <div className="block is-grouped is-grouped-multiline">
	  <a href="files/Chavez_Daniela_CV2021.pdf">
	    <p className="block button is-dark is-medium is-outlined">My Résumé</p>
	  </a>
          {Resume.basics.profiles.map((value, index) => {
            return (
                <a
                  href={value.url}
                  target="blank"
                  title={value.network}
		  style={{color:"black"}}
                >
                <span className="icon is-dark is-large is-">
                    <i className={value.x_icon}></i>
		</span>
                </a>
            );
          })}
	  </div>
          </div>
 
          <div className="column is-1"></div>
        </div>
        <p className="subtitle summary-text has-text-gray-light has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <p className="subtitle summary-text has-text-gray-light has-text-weight-light">
          {Resume.basics.summary}
        </p>
    </section>
  );
}

export default AboutMe;
