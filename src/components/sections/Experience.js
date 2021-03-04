import React from "react";

import TimelineEd from "../elements/TimelineEd";
import TimelineEx from "../elements/TimelineEx";

function Experience() {
  return (
    <section className="section is-6">
      <div className="container is-6" id="experience">
        <h2 className="subtitle is-2">My Education & Experience</h2>
	<div className="columns">
         <div className="column is-6"><TimelineEd /></div>
	 <div className="column is-6"><TimelineEx /></div>
	</div>
      </div>
    </section>
  );
}

export default Experience;
