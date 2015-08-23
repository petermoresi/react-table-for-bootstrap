"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var TableConfig = (function (_React$Component) {
  _inherits(TableConfig, _React$Component);

  function TableConfig(props) {
    _classCallCheck(this, TableConfig);

    _get(Object.getPrototypeOf(TableConfig.prototype), "constructor", this).call(this, props);
  }

  _createClass(TableConfig, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "handleStartRowChanged",
    value: function handleStartRowChanged(event) {
      this.props.updateStartRow(event.currentTarget.value);
    }
  }, {
    key: "handleNumberOfRowsChanged",
    value: function handleNumberOfRowsChanged(event) {
      this.props.updateNumberOfRows(event.currentTarget.value);
    }
  }, {
    key: "handleSelectedRowsChanged",
    value: function handleSelectedRowsChanged(event) {
      this.props.updateSelectedRows(event.currentTarget.value);
    }
  }, {
    key: "handleSuccessRowsChanged",
    value: function handleSuccessRowsChanged(event) {
      this.props.updateSuccessRows(event.currentTarget.value);
    }
  }, {
    key: "handleDangerRowsChanged",
    value: function handleDangerRowsChanged(event) {
      this.props.updateDangerRows(event.currentTarget.value);
    }
  }, {
    key: "handleWarningRowsChanged",
    value: function handleWarningRowsChanged(event) {
      this.props.updateWarningRows(event.currentTarget.value);
    }
  }, {
    key: "render",
    value: function render() {

      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Start Row"
            ),
            _react2["default"].createElement("input", { type: "number", className: "form-control", min: "1", max: this.props.getTableLength() + 1,
              onChange: this.handleStartRowChanged.bind(this), value: this.props.startRow })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Number of Rows"
            ),
            _react2["default"].createElement("input", { className: "form-control", min: "1", max: this.props.getTableLength() + 1,
              type: "number", onChange: this.handleNumberOfRowsChanged.bind(this),
              value: this.props.numberOfRows })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Success Rows"
            ),
            _react2["default"].createElement("input", { className: "form-control", readOnly: !this.props.updateSuccessRows,
              type: "text", onChange: this.handleSuccessRowsChanged.bind(this),
              value: this.props.successRows.join(",") })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Danger Rows"
            ),
            _react2["default"].createElement("input", { className: "form-control", readOnly: !this.props.updateDangerRows,
              type: "text", onChange: this.handleDangerRowsChanged.bind(this),
              value: this.props.dangerRows.join(",") })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Warning Rows"
            ),
            _react2["default"].createElement("input", { className: "form-control", readOnly: !this.props.updateWarningRows,
              type: "text", onChange: this.handleWarningRowsChanged.bind(this),
              value: this.props.warningRows.join(",") })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "col-sm-12 col-md-2" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { className: "control-label", htmlFor: "focusedInput" },
              "Selected Rows"
            ),
            _react2["default"].createElement("input", { className: "form-control", readOnly: !this.props.updateSelectedRows,
              type: "text", onChange: this.handleSelectedRowsChanged.bind(this),
              value: this.props.selectedRows.join(",") })
          )
        )
      );
    }
  }]);

  return TableConfig;
})(_react2["default"].Component);

exports["default"] = TableConfig;

TableConfig.propTypes = {
  rows: _react.PropTypes.array,
  startRow: _react.PropTypes.number,
  numberOfRows: _react.PropTypes.number,
  selectedRows: _react.PropTypes.array,
  successRows: _react.PropTypes.array,
  dangerRows: _react.PropTypes.array,
  warningRows: _react.PropTypes.array,
  getTableLength: _react.PropTypes.func,
  updateSuccessRows: _react.PropTypes.func,
  updateDangerRows: _react.PropTypes.func,
  updateWarningRows: _react.PropTypes.func,
  updateSelectedRows: _react.PropTypes.func
};

TableConfig.defaultProps = {
  rows: [],
  startRow: 1,
  numberOfRows: 10,
  selectedRows: [],
  successRows: [],
  dangerRows: [],
  warningRows: []
};
module.exports = exports["default"];
