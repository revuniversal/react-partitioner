# Partitioner

React component for tracking selected items within a list via function-as-child

## Demo & Examples

Live demo: [revuniversal.github.io/react-partitioner](http://revuniversal.github.io/react-partitioner/)

To build the examples locally, run:

```bash
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

The easiest way to use react-partitioner is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-partitioner.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```bash
npm install react-partitioner --save
```

## Usage

List goes in, events come out. You can't explain that.

```jsx
import React from 'react';
import Partitioner from 'react-partitioner';

const Example = () => (
  <Partitioner
    items=['red', 'orange', 'blue']
    onSelect={e => window.alert(`Selected ${e.item}`)}
    onDeselect={e => window.alert(`Deselected ${e.item}`)}
    onChange={e => window.alert(`${e.selectedItems.length} items selected`)}
  >
    {({availableItems, selectedItems, selectItem, deselectItem}) => (
      <div class="row">
        <div>
          <h3>Available Items</h3>
          {availableItems.map(item => (
            <div key={item.key} onClick={() => selectItem(item)}>
              {item.value}
            </div>
          ))}
        </div>
        <div>
          <h3>Selected Items</h3>
          {availableItems.map(item => (
            <div key={item.key} onClick={() => deselectItem(item)}>
              {item.value}
            </div>
          ))}
        </div>
      </div>
    )}
  </Partitioner>
)
```

### Properties

`getItemKey` A function to get the key of an item, defaults to id.

`getItemValue` A function to get the display value of an item, defaults to id.

`items` **(Required)** The array of items to track.

`onChange` The event handler to call when a select or deselect event occurs.

`onDeselect` The event handler to call when an item is deselected.

`onSelect` The event handler to call when an item is selected.

`selectedItems` Items that are already selected.

### Notes

#### TODOS

[ ] Add more examples to readme
[ ] Add deeper usage explanation to readme
[ ] Document child function usage
[ ] Add jsdoc comments to Partitioner
[ ] Learn to type `partitioner` instead of `partioner` without pausing for 5 seconds

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2017 Rev Herr.

