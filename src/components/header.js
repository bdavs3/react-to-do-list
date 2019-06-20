import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>React To-do List</h1>
        <input placeholder="Enter an item." className="item-input" />
        <button>Add</button>
      </div>
    );
  }
}

export default Header;
