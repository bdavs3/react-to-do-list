import React from "react";

class ListItem extends React.Component {
  render() {
    const { toggleCompletion, completed, id, label } = this.props;

    return (
      <li
        className={completed ? "complete" : "incomplete"}
        onClick={() => toggleCompletion(id)}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompletion(id)}
        />
        {label}
      </li>
    );
  }
}

export default ListItem;
