import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

class Partitioner extends Component {
  constructor(props) {
    super(props);
    this.mapItem = this.mapItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.deselectItem = this.deselectItem.bind(this);
    this.getEventArgs = this.getEventArgs.bind(this);

    let availableItems = [];
    let selectedItems = [];
    const allItems = props.items.map(this.mapItem);
    const selectedKeys = props.selectedItems.map(props.getItemKey);

    if (selectedKeys.length > 0) {
      for (let item of allItems) {
        if (selectedKeys.indexOf(item.key) > -1) {
          selectedItems.push(item);
        } else {
          availableItems.push(item);
        }
      }
    } else {
      availableItems = allItems;
    }

    this.state = { allItems, availableItems, selectedItems };
  }
  mapItem(item) {
    return {
      key: this.props.getItemKey(item),
      value: this.props.getItemValue(item),
      actual: item
    };
  }
  selectItem(item) {
    const selectedItems = [...this.state.selectedItems, item];
    const availableItems = this.state.availableItems.filter(
      p => p.key !== item.key
    );
    var eventArgs = this.getEventArgs(item, availableItems, selectedItems);
    
    this.setState(() => ({ availableItems, selectedItems }));
    this.props.onSelect(eventArgs);
    this.props.onChange({ ...eventArgs, type: 'select' });
  }
  deselectItem(item) {
    const availableItems = [...this.state.availableItems, item];
    const selectedItems = this.state.selectedItems.filter(
      p => p.key !== item.key
    );
    var eventArgs = this.getEventArgs(item, availableItems, selectedItems);
    
    this.setState(() => ({ availableItems, selectedItems }));
    this.props.onDeselect(eventArgs);
    this.props.onChange({ ...eventArgs, type: 'deselect' });
  }
  getEventArgs(item, available, selected) {
    return {
      item: item.actual,
      availableItems: available.map(x => x.actual),
      selectedItems: selected.map(x => x.actual)
    };
  }
  render() {
    return (
      <div>
        {this.props.children({
          allItems: this.state.allItems,
          availableItems: this.state.availableItems,
          selectedItems: this.state.selectedItems,
          selectItem: this.selectItem,
          deselectItem: this.deselectItem
        })}
      </div>
    );
  }
}

const id = x => x;
const noop = () => {};

Partitioner.defaultProps = {
  getItemKey: id,
  getItemValue: id,
  items: [],
  onChange: noop,
  onDeselect: noop,
  onSelect: noop,
  selectedItems: []
};

Partitioner.propTypes = {
  children: PropTypes.func.isRequired,
  getItemKey: PropTypes.func,
  getItemValue: PropTypes.func,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selectedItems: PropTypes.array
};

export default Partitioner;
