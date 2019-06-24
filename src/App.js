import React from "react";
import "./reset.css";
import "./App.scss";

import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";

let index = 0;

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      filter: "all"
    };
  }

  render() {
    const { items, filter } = this.state;

    return (
      <div className="app">
        <Header addItem={this._addItem} />
        <List
          toggleCompletion={this._toggleCompletion}
          items={items}
          filter={filter}
        />
        <Footer
          clearCompleted={this._clearCompleted}
          setFilter={this._setFilter}
          filter={filter}
        />
      </div>
    );
  }

  _addItem = label => {
    const { items } = this.state;
    const id = index++;

    this.setState({
      items: { ...items, [id]: { label, completed: false } }
    });
  };

  _toggleCompletion = id => {
    const { items } = this.state;
    const item = items[id];
    const newItems = {
      ...items,
      [id]: { ...item, completed: !item.completed }
    };

    this.setState({ items: newItems });
  };

  _clearCompleted = () => {
    const { items } = this.state;
    const newItems = {};

    Object.keys(this.state.items).forEach(id => {
      if (!items[id].completed) {
        newItems[id] = items[id];
      }
    });

    this.setState({ items: newItems });
  };

  _setFilter = filter => {
    this.setState({
      filter: filter
    });
  };
}

export default App;
