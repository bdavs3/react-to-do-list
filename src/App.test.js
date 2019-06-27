import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Header from "./components/header";
import List from "./components/list";
import ListItem from "./components/list-item";
import Footer from "./components/footer";

configure({ adapter: new Adapter() });

// for List tests
const testItems = {
  0: { label: "item0", completed: false },
  1: { label: "item1", completed: true },
  2: { label: "item2", completed: false }
};

// for Footer tests
const testOption1 = <option value="all">All</option>;
const testOption2 = <option value="to-do">To-do</option>;
const testOption3 = <option value="completed">Completed</option>;

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });
  it("renders the title", () => {
    const header = shallow(<Header />);
    const title = <h1>React To-do List</h1>;
    expect(header.contains(title)).toBe(true);
  });
  it("contains an input text field", () => {
    const header = shallow(<Header />);
    expect(header.exists(".item-input")).toBe(true);
  });
  it("contains a button for adding items", () => {
    const header = shallow(<Header />);
    expect(header.exists(".add-button")).toBe(true);
  });
  it("changes state when the text field receives input", () => {
    const header = shallow(<Header />);
    const input = header.find("input");
    input.simulate("change", { target: { value: "abc" } });
    expect(header.state().inputValue).toBe("abc");
  });
  it("clears the text field when an item is added", () => {
    const header = mount(<Header addItem={() => null} />);
    const input = header.find("input");
    const button = header.find("button");
    input.simulate("change", { target: { value: "abc " } });
    button.simulate("click");
    expect(header.state().inputValue).toBe("");
  });
});

describe("List", () => {
  it("renders a list of items without crashing", () => {
    shallow(<List items={testItems} />);
  });
  it("contains an unordered list", () => {
    const list = shallow(<List items={testItems} />);
    const ul = <ul />;
    expect(list.contains(ul)).toBe(true);
  });
});

describe("ListItem", () => {
  it("renders without crashing", () => {
    shallow(<ListItem label="test" />);
  });
  it("contains a checkbox", () => {
    const item = shallow(<ListItem label="test" />);
    expect(item.exists(".checkbox")).toBe(true);
  });
  it("contains an HTML list item", () => {
    const item = shallow(<ListItem label="test" />);
    expect(item.exists(".complete") || item.exists(".incomplete")).toBe(true);
  });
  it("can be checked to be marked completed", () => {
    const app = mount(<App />);
    const header = app.find(Header);
    const itemInput = header.find("input");
    const addButton = header.find("button");
    itemInput.simulate("change", {
      target: { value: "example incomplete item" }
    });
    addButton.simulate("click");
    itemInput.simulate("change", {
      target: { value: "example complete item" }
    });
    addButton.simulate("click");
    const item = app.find(ListItem).at(1);
    const checkbox = item.find("input");
    checkbox.simulate("change", { target: { value: true } });
    expect(app.state().items[1].completed).toBe(true);
  });
});

describe("Footer", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });
  it("contains a dropdown menu", () => {
    const footer = shallow(<Footer />);
    expect(footer.exists("#dropdown")).toBe(true);
  });
  it("provides three options for the dropdown menu", () => {
    const footer = shallow(<Footer />);
    expect(
      footer.contains(testOption1) &&
        footer.contains(testOption2) &&
        footer.contains(testOption3)
    ).toBe(true);
  });
  it("contains a clear button", () => {
    const footer = shallow(<Footer />);
    expect(footer.exists(".clear-button"));
  });
  it("sets a filter when a new dropdown item is selected", () => {
    const app = mount(<App />);
    const footer = app.find(Footer);
    const dropdown = footer.find("select");
    dropdown.simulate("change", { target: { value: "to-do" } });
    expect(app.state().filter).toBe("to-do");
  });
  it("properly filters items when a filter is set", () => {
    const app = mount(<App />);
    const header = app.find(Header);
    const itemInput = header.find("input");
    const addButton = header.find("button");
    const footer = app.find(Footer);
    const filter = footer.find("select");
    itemInput.simulate("change", { target: { value: "testItem0" } });
    addButton.simulate("click");
    itemInput.simulate("change", { target: { value: "testItem1" } });
    addButton.simulate("click");
    const checkbox0 = app
      .find(ListItem)
      .at(0)
      .find("input");
    checkbox0.simulate("change", { target: { value: true } });
    filter.simulate("change", { target: { value: "to-do" } });
    expect(app.find(ListItem)).toHaveLength(1);
  });
  it("can clear completed items from the list", () => {
    const app = mount(<App />);
    const header = app.find(Header);
    const itemInput = header.find("input");
    const addButton = header.find("button");
    const footer = app.find(Footer);
    const clearButton = footer.find("button");
    itemInput.simulate("change", {
      target: { value: "example incomplete item" }
    });
    addButton.simulate("click");
    itemInput.simulate("change", {
      target: { value: "example complete item" }
    });
    addButton.simulate("click");
    const item = app.find(ListItem).at(1);
    const checkbox = item.find("input");
    checkbox.simulate("change", { target: { value: true } });
    clearButton.simulate("click");
    expect(Object.keys(app.state().items)).toHaveLength(1);
  });
});
