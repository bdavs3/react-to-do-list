import React from "react";

class Footer extends React.Component {
  render() {
    const { clearCompleted } = this.props;

    return (
      <div className="footer">
        <label htmlFor="dropdown">View:</label>
        <select id="dropdown" onChange={this._onChange}>
          <option value="all">All</option>
          <option value="to-do">To-do</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={clearCompleted}>Clear</button>
      </div>
    );
  }

  _onChange = evt => {
    this.props.setFilter(evt.target.value);
  };
}

export default Footer;
