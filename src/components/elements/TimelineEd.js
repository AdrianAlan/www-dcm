import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function TimelineEd() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-large is-yellow">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-light"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.education
        .map(item => {
          return new Date(item.degreedate).getFullYear();
        })
        .map((year, i, array) => {
          let content = [];
          if (i === 0 || array[i-1] !== year) {
           content.push(
             <header key={i} className="timeline-header">
               <span className="tag is-medium is-yellow">{year}</span>
             </header>
           );
          content.push(
            Resume.education
              .filter(education => new Date(education.degreedate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.degreedate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
	            country={item.country}
		    highlights={item.highlights}
                    company={item.uni}
                    summary={item.course}
                  />
                );
              })
          );}
          return content;
        })}
    </div>
  );
}

export default TimelineEd;
