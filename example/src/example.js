import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Partitioner from 'react-partitioner';
import List from './list';

const items = [
  'black',
  'red',
  'orange', 
  'yellow', 
  'green', 
  'blue', 
  'indigo', 
  'violet',
  'white'
];

class App extends Component {
  render () {
    return (
      <div>
        <Partitioner 
          items={items} 
          onChange={e => console.log(e.type + ' ' + e.item)}
        >
          {({availableItems, selectedItems, selectItem, deselectItem}) => (
            <div style={{margin: '0px', padding: '0px'}}>
              <List
                items={availableItems}
                onItemClick={selectItem}
                style={{
                  float: 'left',
                  width: '50%',
                  height: '80px',
                  overflowY: 'scroll',
                  margin: '-1px',
                  border: '1px solid black'
                }}
              />
              <List
                items={selectedItems}
                onItemClick={deselectItem}
                style={{
                  float: 'left',
                  width: '50%',
                  height: '80px',
                  overflowY: 'scroll',
                  margin: '-1px',
                  border: '1px solid black'
                }}
              />
            </div>
          )}
        </Partitioner>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
