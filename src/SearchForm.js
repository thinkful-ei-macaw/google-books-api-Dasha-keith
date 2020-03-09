import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="search_form">
        <form>
          <fieldset>
            <legend>search here</legend>
            <input
              type="text"
              id="js-search-query"
              placeholder="search"
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
                name="Print-type"
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
                name="Book-type"
                aria-label="Filter results by book type, whatever tf that means"
              >
                <option value="all">No Filter</option>
                <option value="free">Some Filter</option>
                <option value="not free">ALL the Filter</option>
              </select>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchForm.defaultProps = {
  books: []
};

export default SearchForm;
