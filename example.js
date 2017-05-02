require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPartitioner = require('react-partitioner');

var _reactPartitioner2 = _interopRequireDefault(_reactPartitioner);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var items = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactPartitioner2['default'],
          {
            items: items,
            onChange: function (e) {
              return console.log(e.type + ' ' + e.item);
            }
          },
          function (_ref) {
            var availableItems = _ref.availableItems;
            var selectedItems = _ref.selectedItems;
            var selectItem = _ref.selectItem;
            var deselectItem = _ref.deselectItem;
            return _react2['default'].createElement(
              'div',
              { style: { margin: '0px', padding: '0px' } },
              _react2['default'].createElement(_list2['default'], {
                items: availableItems,
                onItemClick: selectItem,
                style: {
                  float: 'left',
                  width: '50%',
                  height: '80px',
                  overflowY: 'scroll',
                  margin: '-1px',
                  border: '1px solid black'
                }
              }),
              _react2['default'].createElement(_list2['default'], {
                items: selectedItems,
                onItemClick: deselectItem,
                style: {
                  float: 'left',
                  width: '50%',
                  height: '80px',
                  overflowY: 'scroll',
                  margin: '-1px',
                  border: '1px solid black'
                }
              })
            );
          }
        )
      );
    }
  }]);

  return App;
})(_react.Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"./list":2,"react":undefined,"react-dom":undefined,"react-partitioner":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var List = function List(_ref) {
  var items = _ref.items;
  var onItemClick = _ref.onItemClick;
  var style = _ref.style;
  return _react2['default'].createElement(
    'div',
    { style: style },
    items.map(function (item) {
      return _react2['default'].createElement(
        'div',
        { key: item.key, onClick: function () {
            return onItemClick(item);
          } },
        item.value
      );
    })
  );
};

exports['default'] = List;
module.exports = exports['default'];

},{"react":undefined}]},{},[1]);
