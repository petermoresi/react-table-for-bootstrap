import React, { Component, PropTypes } from 'react';

export default class TableConfig extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }
  handleStartRowChanged(event) {
    this.props.updateStartRow( event.currentTarget.value );
  }

  handleNumberOfRowsChanged(event) {
    this.props.updateNumberOfRows( event.currentTarget.value );
  }

  handleSelectedRowsChanged(event) {
    this.props.updateSelectedRows( event.currentTarget.value );
  }
  handleSuccessRowsChanged(event) {
    this.props.updateSuccessRows( event.currentTarget.value );
  }

  handleDangerRowsChanged(event) {
    this.props.updateDangerRows( event.currentTarget.value );
  }

  handleWarningRowsChanged(event) {
    this.props.updateWarningRows( event.currentTarget.value );
  }

  render() {

    return (
      <div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Start Row</label>
            <input className="form-control" min="1" max={ this.props.rows.length + 1 } type="number"
              onChange={ this.handleStartRowChanged.bind(this) } defaultValue={ this.props.startRow }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Number of Rows</label>
            <input className="form-control" min="1" max={ this.props.rows.length + 1 }
              type="number" onChange={ this.handleNumberOfRowsChanged.bind(this) }
              defaultValue={ this.props.numberOfRows }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Success Rows</label>
            <input className="form-control" readOnly={!this.props.updateSuccessRows}
              type="text" onChange={ this.handleSuccessRowsChanged.bind(this) }
              value={ this.props.successRows.join(', ') }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Danger Rows</label>
            <input className="form-control" readOnly={!this.props.updateDangerRows}
              type="text" onChange={ this.handleDangerRowsChanged.bind(this) }
              value={ this.props.dangerRows.join(', ') }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Warning Rows</label>
            <input className="form-control" readOnly={!this.props.updateWarningRows}
              type="text" onChange={ this.handleWarningRowsChanged.bind(this) }
              value={ this.props.warningRows.join(', ') }/>
          </div>
        </div>
        <div className="col-sm-12 col-md-2">
          <div className="form-group">
            <label className="control-label" htmlFor="focusedInput">Selected Rows</label>
            <input className="form-control" readOnly={!this.props.updateSelectedRows}
              type="text" onChange={ this.handleSelectedRowsChanged.bind(this) }
              value={ this.props.selectedRows.join(',') }/>
          </div>
        </div>
      </div>
    );
  }
}

TableConfig.propTypes = {
  rows: PropTypes.array,
  startRow: PropTypes.number,
  numberOfRows: PropTypes.number,
  selectedRows: PropTypes.array,
  successRows: PropTypes.array,
  dangerRows: PropTypes.array,
  warningRows: PropTypes.array,
  updateSuccessRows: PropTypes.func,
  updateDangerRows: PropTypes.func,
  updateWarningRows: PropTypes.func,
  updateSelectedRows: PropTypes.func,
}

TableConfig.defaultProps = {
  rows: [],
  startRow: 1,
  numberOfRows: 10,
  selectedRows: [],
  successRows: [],
  dangerRows: [],
  warningRows: [],
}
