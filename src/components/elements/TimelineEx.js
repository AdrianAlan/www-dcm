import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function TimelineEx() {
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
      {Resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
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
            Resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    summary={item.summary}
                  />
                );
              })
          );}
          return content;
        })}
    </div>
  );
}

export default TimelineEx;
