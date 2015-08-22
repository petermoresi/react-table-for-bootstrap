/* Render Bootstrap Table
*/

import React, { Component, PropTypes } from 'react';
import CHOOSE from 'formula-choose';

export default class BootstrapTable extends Component {

  constructor() {
    super();
  }

  handleRowClicked(event) {
    var rowIndex = +event.currentTarget.rowIndex + this.props.startRow;
    var index = this.props.selectedRows.indexOf(rowIndex-1);
    var rows = this.props.selectedRows;
    if (index === -1) {
      rows.push(rowIndex-1);
    } else {
      rows.splice(index, 1);
    }

    this.props.updateSelectedRows(rows)

  }

  render() {
    return (
      <table className={'table' + (this.props.showBorder ? ' table-bordered' : '') + (this.props.enableHover ? ' table-hover' : '') }>
        <thead>
          <tr>
            { this.props.selectable ? <th></th> : null }
            { this.props.headers.map( (N, I) => <th key={I}>{ N }</th> ) }
          </tr>
        </thead>
        <tbody>
          { this.props.rows.slice(this.props.startRow-1, this.props.startRow + this.props.numberOfRows).map((n, rowIndex) => {
            rowIndex++;
            let isSelected = this.props.selectedRows.indexOf(rowIndex) > -1,
            isSuccess = this.props.successRows.indexOf(rowIndex) > -1,
            isDanger = this.props.dangerRows.indexOf(rowIndex) > -1,
            isWarning = this.props.warningRows.indexOf(rowIndex) > -1,
            mode = isSelected ? 1 : isSuccess ? 2 : isDanger ? 3 : isWarning ? 4 : 0;

            return (
              <tr key={rowIndex} onClick={ this.handleRowClicked.bind(this) }
                  className={ CHOOSE( mode, 'active', 'success', 'danger', 'warning', '' ) }>
                { this.props.selectable ? <td><input type="checkbox" checked={ isSelected }/></td> : null }
                { this.props.columnRenderers.map((col, i) => <td key={i + '-' + n[this.props.keyField]}>{ typeof col === "function" ? col(n) : n[col] }</td>)}
              </tr>
            )}
          )}
        </tbody>
      </table>
    );
  }
}

BootstrapTable.propTypes = {
  keyField: PropTypes.string,
  selectable: PropTypes.bool,
  showBorder: PropTypes.bool,
  enableHover: PropTypes.bool,
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
  startRow: 1,
  numberOfRows: 10,
  selectedRows: [],
  successRows: [],
  dangerRows: [],
  warningRows: [],
  updateSelectedRows: () => {}
}
