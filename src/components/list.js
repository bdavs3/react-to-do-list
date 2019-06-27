import React from "react";

import ListItem from "./list-item";

class List extends React.Component {
  render() {
    const { toggleCompletion, filter, items } = this.props;

    const filteredItems = Object.entries(items)
      // items must pass a test that determines whether they should be viewed with the current filter
      .filter(([key, value]) => {
        return (
          filter === "all" ||
          (filter === "completed" && items[key].completed) ||
          (filter === "to-do" && !items[key].completed)
        );
      })
      // items that survive the filter are then turned into ListItems
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
