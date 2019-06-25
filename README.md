# react-to-do-list

### Description

A basic [React](http://reactjs.org) web-app built for learning purposes. Inspired by a similar exercise found in Microsoft's [frontend bootcamp](https://github.com/microsoft/frontend-bootcamp). Styled with [Sass](https://sass-lang.com/) and tested with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme).

### How to Run

Clone this repository somewhere on your machine by running\
\
**HTTPS:**

```sh
git clone https://github.com/bdavs3/react-to-do-list.git
```

**SSH:**

```sh
git clone git@github.com:bdavs3/react-to-do-list.git
```

Then, to install dependencies, simply run\
\
**NPM:**

```sh
npm install
```

**Yarn:**

```sh
yarn install
```

You'll find the app at localhost:3000 in your browser by running\
\
**NPM:**

```sh
npm start
```

**Yarn:**

```sh
yarn start
```

### Intended Behavior

- Add items to the to-do list by typing in a text field and clicking a button or pressing 'enter'
- Check mark the items when they are finished
- Remove items that are finished by pressing a 'clear completed items' button
- Switch between three views: 'all', 'to-do', and 'completed'

##### Here's what I have in mind:

<div style="text-align: center;"><img src="./src/images/mockup.png" width="603" height="450" ></img></div>

### Road-blocks

_This is where I kept track of significant struggles I had in the process of coding this._

- Data flow: I was having trouble figuring out how to pass data from one component to another. For example, I wanted the `Header`'s `add` button to take the value of the text field in Header and create a `ListItem` from that which is added to the `List`. I knew this would involve using React's [state](https://reactjs.org/docs/state-and-lifecycle.html) and [props](https://reactjs.org/docs/components-and-props.html), but I wasn't sure exactly what to do. I found that having functions live together in the `App.js` file (which you pass as props to the individual components) works quite well. These functions should be ones involving multiple components.
- App state functions: I leaned heavily on the [Microsoft frontend bootcamp](https://github.com/microsoft/frontend-bootcamp) approach to maintaining state for this application. I needed help in figuring out how to write functions that alter this state in order to add new items to the list or mark items as completed.
- Testing: Jest is pretty straightforward, but I wanted to experiment using [Enzyme](https://github.com/airbnb/enzyme) for [shallow rendering](https://facebook.github.io/create-react-app/docs/running-tests#option-1-shallow-rendering) of components. Adding Enzyme seemed pretty easy, but I ran into trouble. I think because I used `create-react-app` to start this project, Jest was a little funky. With Enzyme, you're supposed to put a `setupTests.js` file in the `src` directory to configure an `Adapter` which allows Enzyme to work with different versions of React. Despite my efforts to point to this file in `package.json`, I couldn't get the test suite to pick up the `Adapter` config. I ended up solving this by simply configuring the adapter directly within the `App.test.js` file.

### Things I Learned

- Sass has a lot of useful features and I don't think I'll ever just use vanilla CSS again.
- CSS resets provide a clean slate for starting projects without browser [user agent stylesheets](https://www.chainsawonatireswing.com/2016/09/20/web-browser-default-css-files/) getting in the way.
- Pass a `key` prop to list item React components so they may be uniquely identified. If you don't do that, you'll see this console message: `Warning: Each child in a list should have a unique "key" prop`.
- Javascript Array methods like `map` and `filter` are not things I have used much before, but they are great.
- I wrote all my tests retroactively, which was a bad call. I should have written them first so I could have some insight into where things were going wrong when I was programming.
  - Same goes for comments. It would have helped me read my own code if I included important comments as I went.
