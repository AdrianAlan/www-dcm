import React, { Component } from "react";
import BlogCard from "../elements/BlogCard";

class Blog extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    const devTo = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielachvzm";

    fetch(devTo)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let articles = [];
        data.items.forEach((element, index) => {
          if (index < 3) {
            var content = element.description;
	    var cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");
            var trimmedString = cleanText.substring(0, 150) + '...';
            articles.push(
              <div className="column" key={index}>
                <BlogCard
                  key={index}
                  title={element.title}
                  url={element.guid}
                  image={element.thumbnail}
                  extract={trimmedString}
                />
              </div>
            );
	  }
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articles.push(<div className="column"></div>);
        }
        this.setState({ articles: articles });
      });
  }

  render() {
    return (
      <section className="section" id="blog">
        <div className="container">
          <h2 className="subtitle is-3">My latest blog posts</h2>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Blog;
