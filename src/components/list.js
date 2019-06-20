import React from "react";
import { blue } from "ansi-colors";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ul>
          <li>
            <input type="checkbox" />
            Item 1
          </li>
          <li>
            <input type="checkbox" />
            Item 2
          </li>
          <li>
            <input type="checkbox" />
            Item 3
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
