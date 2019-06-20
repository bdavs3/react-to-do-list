import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <label for="dropdown">View:</label>
        <select id="dropdown">
          <option value="all">All</option>
          <option value="to-do">To-do</option>
          <option value="completed">Completed</option>
        </select>
        <button>Clear</button>
      </div>
    );
  }
}

export default Footer;
