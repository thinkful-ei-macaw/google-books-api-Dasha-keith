import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    return (
      <div className="search_result">
        <h2>results</h2>
      </div>
    );

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     books: [],
    //     selected: null
    //   };
    // }
  }

  componentDidMount() {
    const searchUrl = "https://www.googleapis.com/auth/books";
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        const books = Object.keys(data).map(key => data[key].item[0]);
        this.setState({
          books
        });
      });
  }
}

export default SearchResult;
