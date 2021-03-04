import React from "react";
import AboutMe from "../sections/AboutMe";
import Articles from "../sections/Articles";
import Experience from "../sections/Experience";
import Blog from "../sections/Blog";

function Content() {
  return (
    <main>
      <AboutMe />
      <Blog />
      <Articles />
      <Experience />
    </main>
  );
}

export default Content;
