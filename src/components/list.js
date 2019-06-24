import React from "react";

import ListItem from "./list-item";

class List extends React.Component {
  render() {
    const { toggleCompletion, filter, items } = this.props;

    const filteredItems = Object.entries(items)
      .filter(([key, value]) => {
        return (
          filter === "all" ||
          (filter === "completed" && items[key].completed) ||
          (filter === "to-do" && !items[key].completed)
        );
      })
      .map(([key, value]) => {
        return (
          <ListItem
            toggleCompletion={toggleCompletion}
            completed={value.completed}
            key={key}
            id={key}
            label={value.label}
          />
        );
      });

    return (
      <div className="list">
        <ul>{filteredItems}</ul>
      </div>
    );
  }
}

export default List;
