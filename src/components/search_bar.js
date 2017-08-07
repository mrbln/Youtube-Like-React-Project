// import React from 'react';
import React, { Component } from 'react';


// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }

  render() {
      // return <input onChange={this.onInputChange} />;
      // If you have single statement, don't have to put the curly braces
      // return <input onChange={(event) => console.log(event.target.value)} />;
      // If you have only one argument, don't have to put the paranthesis
      return (
        <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
        // Value of the input: {this.state.term}
      );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
