import React from "react";

class ListItem extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <li>
        <input type="checkbox" />
        {name}
      </li>
    );
  }
}

export default ListItem;
