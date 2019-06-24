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
        <List items={items} filter={filter} />
        <Footer />
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
}

export default App;
