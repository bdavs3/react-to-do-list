import React from "react";

import ListItem from "./list-item";

class List extends React.Component {
  render() {
    const { toggleCompletion, items } = this.props;
    const mappedItems = Object.entries(items).map(([key, value]) => {
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
        <ul>{mappedItems}</ul>
      </div>
    );
  }
}

export default List;
