#Quick-UI

Quick-UI is a set of [React](http://facebook.github.io/react/) components for building an
online IDE: font selection, font weight, color, gradient and more.

## Required Knowledge

We recommend that you get to know [React](http://facebook.github.io/react/)
before diving into quick-ui. Quick-UI is a set of React components,
so understanding how React fits into web development is important.

## Installation

Quick-UI is available as an [npm package](https://www.npmjs.org/package/quick-ui).

**Stable channel**
```sh
npm install quick-ui
```

### React-Tap-Event-Plugin

Some components use
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) to
listen for touch events because onClick is not fast enough
_This dependency is temporary and will eventually go away._ Until then,
be sure to inject this plugin at the start of your app.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

### Roboto Font

Quick-UI was designed with the [Roboto](http://www.google.com/fonts/specimen/Roboto)
font in mind. So be sure to include it in your project. Here are
[some instructions](http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500)
on how to do so.

## Usage

Here is a quick example to get you started:

**./MyAwesomeReactComponent.js**
```jsx
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <InputFont />
);

export default MyAwesomeReactComponent;
```

## License
This project is licensed under the terms of the
[MIT license](https://github.com/quickstudio/quick-ui/blob/master/LICENSE)
