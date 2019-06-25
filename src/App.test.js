import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Header from "./components/header";
import List from "./components/list";
import ListItem from "./components/list-item";
import Footer from "./components/footer";

configure({ adapter: new Adapter() });

// see List tests
const testItems = {
  0: { label: "item0", completed: false },
  1: { label: "item1", completed: true },
  2: { label: "item2", completed: false }
};

// see Footer tests
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
});
