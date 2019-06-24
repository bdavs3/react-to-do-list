import React from "react";

import ListItem from "./list-item";

class List extends React.Component {
  render() {
    const { items } = this.props;
    const mappedItems = Object.entries(items).map(([key, value]) => {
      return <ListItem key={key} name={value.label} />;
    });

    return (
      <div className="list">
        <ul>{mappedItems}</ul>
      </div>
    );
  }
}

export default List;
