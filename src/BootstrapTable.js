/* Render Bootstrap Table
*/

import React, { Component, PropTypes } from 'react';
import {Table} from 'react-partial-table';

export default class BootstrapTable extends Component {

  constructor() {
    super();
  }

  handleRowClicked(rowIndex) {
    this.props.updateSelectedRows(rowIndex)
  }

  render() {

    return (
      <Table
        fixedHeader={this.props.fixedHeader}
        startRow={this.props.startRow}
        numberOfRows={this.props.numberOfRows}
        interval={this.props.interval}
        getRowAt={ this.props.getRowAt }
        className={'table' +
          (this.props.showBorder ? ' table-bordered' : '') +
          (this.props.enabledStriped ? ' table-striped' : '') +
          (this.props.enableHover ? ' table-hover' : '')
        }
        getRowClassName={
          (rowIndex) => {
            let isSelected = this.props.selectedRows.indexOf(rowIndex) > -1,
            isSuccess = this.props.successRows.indexOf(rowIndex) > -1,
            isDanger = this.props.dangerRows.indexOf(rowIndex) > -1,
            isWarning = this.props.warningRows.indexOf(rowIndex) > -1;
            return (isSelected ? 'active' : isSuccess ? 'success' : isDanger ? 'danger' : isWarning ? 'warning' : '');
          }.bind(this)
        }
        headerRenderers={this.props.headerRenderers}
        columnRenderers={this.props.columnRenderers}
        handleRowClick={(rowIndex) => this.props.updateSelectedRows(rowIndex)}>
        {this.props.children}
      </Table>
    );
  }
}

BootstrapTable.propTypes = {
  keyField: PropTypes.string,
  selectable: PropTypes.bool,
  showBorder: PropTypes.bool,
  enableHover: PropTypes.bool,
  enabledStriped: PropTypes.bool,
  startRow: PropTypes.number,
  numberOfRows: PropTypes.number,
  rows: PropTypes.array,
  headers: PropTypes.array,
  columns: PropTypes.array,
  selectedRows: PropTypes.array,
  successRows: PropTypes.array,
  dangerRows: PropTypes.array,
  warningRows: PropTypes.array,
  updateSelectedRows: PropTypes.func
}

BootstrapTable.defaultProps = {
  keyField: "id",
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
  updateSelectedRows: () => {}
}
