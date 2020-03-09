import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="search_form">
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>search here</legend>
            <input
              type="text"
              id="js-search-query"
              placeholder="search"
              name="query"
              required
            ></input>
            <button type="submit" id="Search">
              Search
            </button>
            <p id="filters">
              <label type="print-type" id="print-type">
                Print Type{" "}
              </label>
              <select
                className="print-type"
                id="js-print-type"
                name="print-type"
                aria-label="Filter results by print type"
              >
                <option value="all">All</option>
                <option value="free">free</option>
                <option value="not free">not free</option>
              </select>

              <label type="filter-control" id="filter-label">
                Book Type{" "}
              </label>
              <select
                className="book-type"
                id="js-book-type"
                name="booktype"
                aria-label="Filter results by book type, whatever tf that means"
              >
                <option value="all">No Filter</option>
                <option value="ebook">E-book</option>
                <option value="paperbook">ALL the Filter</option>
              </select>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }

  onSubmit = e => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    console.log("am i running");
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${values.query}`;
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.props.setBooks(data.items);
      });
  };
}

SearchForm.defaultProps = {
  books: []
};

export default SearchForm;
