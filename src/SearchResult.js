import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    let books = this.props.books.map(book => (
      <li>
        <h2>{book.volumeInfo.title}</h2>
        <img src={book.volumeInfo.imageLinks.thumbnail} />
        <p> {book.volumeInfo.description}</p>
      </li>
    ));
    return (
      <div className="search_result">
        <ul>{books}</ul>
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

  /* componentDidMount() {
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
*/
}

export default SearchResult;
