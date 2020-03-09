import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";



class App extends Component {
  state = {books: []};
  setBooks = books => {
    this.setState({books})
  }

  render() {
    return (
      <div className="Google book search">
        <h1>Google Book Search</h1>
        <SearchForm setBooks={this.setBooks} />

        {/* //<h2>{SearchResult}</h2> */}
        <SearchResult books={this.state.books} />
      </div>
    );
  }
}

// constructor(props) {
//   super(props);
//   this.state = {
//     books: [],
//     selected: null
//   };
// }
//   componentDidMount() {
//     fetch("https://www.googleapis.com/auth/books")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       });
//   }
// }
// }
// Promise.all([doTask("A"), doTask("B"), doTask("C")])
//   .then(results => {
//     results.forEach(result => console.log(result));
//     return doTask("D");
//   })
//   .then(result => {
//     console.log(result);
//   });

export default App;

const apiKey = "AIzaSyDHwAnuhcrWJqqSEQLNxQFJb2cEr2zbp2g";
