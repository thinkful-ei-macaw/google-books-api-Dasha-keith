import React, { Component } from "react";
//import "./App.css";
import SearchForm from "./SearchForm";

class App extends Component {
  render() {
    return (
      <div className="demonym_app">
        <h1>Google Book Search</h1>
        <SearchForm books={[{ name: "Barbados" }, { name: "Bahrain" }]} />
      </div>
    );
  }
}
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//       selected: null
//     };
//   }
//   componentDidMount() {
//     fetch("https://country.register.gov.uk/records.json?page-size=5000")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       });
//   }
// }

export default App;

//key=AIzaSyDHwAnuhcrWJqqSEQLNxQFJb2cEr2zbp2g
