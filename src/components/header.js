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
          ref={input => {
            this.itemInput = input;
          }}
          onKeyDown={this._handleKeyDown}
          onChange={this._inputKeystroke}
          placeholder="Enter an item."
          className="item-input"
        />
        <button className="add-button" onClick={this._onAdd}>
          Add
        </button>
      </div>
    );
  }

  // allows for user to press enter instead of the add button to create a list item
  _handleKeyDown = evt => {
    if (evt.key === "Enter") {
      this._onAdd();
    }
  };

  _inputKeystroke = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  _onAdd = () => {
    // passes input value to the App to handle
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
    this.itemInput.value = "";
  };
}

export default Header;
