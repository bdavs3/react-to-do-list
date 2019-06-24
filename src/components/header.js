import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="header">
        <h1>React To-do List</h1>
        <input
          id="itemInput"
          onKeyDown={this._handleKeyDown}
          onChange={this._inputKeystroke}
          placeholder="Enter an item."
          className="item-input"
        />
        <button onClick={this._addItem}>Add</button>
      </div>
    );
  }

  _handleKeyDown = evt => {
    if (evt.key === "Enter") {
      this._addItem();
    }
  };

  _inputKeystroke = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  _addItem = () => {
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
    document.getElementById("itemInput").value = "";
  };
}

export default Header;
