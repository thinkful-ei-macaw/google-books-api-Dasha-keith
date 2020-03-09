import React, { Component } from "react";
//import "./App.css";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

class App extends Component {
  render() {
    return (
      <div className="Google book search">
        <h1>Google Book Search</h1>
        <SearchForm books={[{ name: "Barbados" }, { name: "Bahrain" }]} />

        {/* //<h2>{SearchResult}</h2> */}
        <SearchResult />
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
