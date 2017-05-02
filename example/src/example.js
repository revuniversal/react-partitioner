import React, {Component} from "react";
import ReactDOM from "react-dom";
import Partitioner from "react-partitioner";
import List from "./list";

const items = [
  "black",
  "red",
  "orange", 
  "yellow", 
  "green", 
  "blue", 
  "indigo", 
  "violet",
  "white"
];

class App extends Component {
  render () {
    return (
      <div>
        <Partitioner items={items}>
          {({availableItems, selectedItems, selectItem, deselectItem}) => (
            <div>
              <List items={availableItems} onClick={selectItem} />
              <List items={selectedItems} onClick={deselectItem} />
            </div>
          )}
        </Partitioner>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
