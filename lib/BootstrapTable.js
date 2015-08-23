/* Render Bootstrap Table
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formulaChoose = require('formula-choose');

var _formulaChoose2 = _interopRequireDefault(_formulaChoose);

var _lodashRange = require('lodash.range');

var _lodashRange2 = _interopRequireDefault(_lodashRange);

var BootstrapTable = (function (_Component) {
  _inherits(BootstrapTable, _Component);

  function BootstrapTable() {
    _classCallCheck(this, BootstrapTable);

    _get(Object.getPrototypeOf(BootstrapTable.prototype), 'constructor', this).call(this);
  }

  _createClass(BootstrapTable, [{
    key: 'handleRowClicked',
    value: function handleRowClicked(rowIndex) {
      this.props.updateSelectedRows(rowIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'table',
        { className: 'table' + (this.props.showBorder ? ' table-bordered' : '') + (this.props.enabledStriped ? ' table-striped' : '') + (this.props.enableHover ? ' table-hover' : '') },
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            this.props.selectable ? _react2['default'].createElement('th', null) : null,
            this.props.headers.map(function (N, I) {
              return _react2['default'].createElement(
                'th',
                { key: I },
                N
              );
            })
          )
        ),
        _react2['default'].createElement(
          'tbody',
          null,
          (0, _lodashRange2['default'])(this.props.startRow, this.props.startRow + this.props.numberOfRows).map(function (rowIndex) {

            var row = _this.props.getRowAt(rowIndex - 1);

            if (!row) {
              return null;
            }

            var isSelected = _this.props.selectedRows.indexOf(rowIndex) > -1,
                isSuccess = _this.props.successRows.indexOf(rowIndex) > -1,
                isDanger = _this.props.dangerRows.indexOf(rowIndex) > -1,
                isWarning = _this.props.warningRows.indexOf(rowIndex) > -1,
                mode = isSelected ? 1 : isSuccess ? 2 : isDanger ? 3 : isWarning ? 4 : 0;

            return _react2['default'].createElement(
              'tr',
              { key: rowIndex, onClick: _this.handleRowClicked.bind(_this, rowIndex),
                className: (0, _formulaChoose2['default'])(mode, 'active', 'success', 'danger', 'warning', '') },
              _this.props.selectable ? _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement('input', { type: 'checkbox', checked: isSelected })
              ) : null,
              _this.props.columnRenderers.map(function (col, i) {
                return _react2['default'].createElement(
                  'td',
                  { key: i + '-' + row[_this.props.keyField] },
                  typeof col === 'function' ? col(row) : row[col]
                );
              })
            );
          })
        )
      );
    }
  }]);

  return BootstrapTable;
})(_react.Component);

exports['default'] = BootstrapTable;

BootstrapTable.propTypes = {
  keyField: _react.PropTypes.string,
  selectable: _react.PropTypes.bool,
  showBorder: _react.PropTypes.bool,
  enableHover: _react.PropTypes.bool,
  enabledStriped: _react.PropTypes.bool,
  startRow: _react.PropTypes.number,
  numberOfRows: _react.PropTypes.number,
  rows: _react.PropTypes.array,
  headers: _react.PropTypes.array,
  columns: _react.PropTypes.array,
  selectedRows: _react.PropTypes.array,
  successRows: _react.PropTypes.array,
  dangerRows: _react.PropTypes.array,
  warningRows: _react.PropTypes.array,
  updateSelectedRows: _react.PropTypes.func
};

BootstrapTable.defaultProps = {
  keyField: 'id',
  selectable: false,
  showBorder: false,
  enableHover: true,
  enableStriped: false,
  startRow: 1,
  numberOfRows: 10,
  selectedRows: [],
  successRows: [],
  dangerRows: [],
  warningRows: [],
  updateSelectedRows: function updateSelectedRows() {}
};
module.exports = exports['default'];
