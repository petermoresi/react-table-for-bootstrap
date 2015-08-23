/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import {BootstrapTable, TableConfig} from 'react-table-for-bootstrap';
import Colors from './CrayolaColors';

function between(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default class MyApp extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: Colors,
      startRow: between(1, 100),
      successRows: [1,4,21],
      selectedRows: [10]
    };
  }

  componentDidMount() {
    setInterval( function() {
      this.setState( { counter: (this.state.counter+1) } );
    }.bind(this), 1000);
  }

  handleRandomize() {
    var rows = this.state.rows.map((n) => {
      n.width = between(25, 100);
      return n;
    }.bind(this));
    this.setState({ rows: rows, startRow: between(0, 100) });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRandomize.bind(this)}
          className="btn btn-primary">
          Randomize
        </button>

        <TableConfig
          rows={this.state.rows}
          startRow={this.state.startRow}
          numberOfRows={this.state.numberOfRows}
          successRows={this.state.successRows}
          dangerRows={this.state.dangerRows}
          warningRows={this.state.warningRows}
          selectedRows={this.state.selectedRows}
          updateStartRow={ (value) => { this.setState({ startRow: +value }) }.bind(this) }
          updateNumberOfRows={ (value) => { this.setState({ numberOfRows: +value }) }.bind(this) } />

        <BootstrapTable
          getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
          headers={['Color', 'Hex Value']}
          startRow={this.state.startRow}
          successRows={this.state.successRows}
          dangerRows={this.state.dangerRows}
          warningRows={this.state.warningRows}
          selectedRows={this.state.selectedRows}
          columnRenderers={[
            (row) => `${row.name} (${row.hex})`,
            (row) => <span style={{
              paddingTop: 10,
              display: 'block',
              backgroundColor: row.hex,
              width: row.width + '%', height: '3em'
            }}></span>]
          }
          updateSelectedRows={
            (rowIndex) => {
              var index = this.state.selectedRows.indexOf(rowIndex);
              var rows = this.state.selectedRows;
              if (index === -1) {
                rows.push(rowIndex);
              } else {
                rows.splice(index, 1);
              }
              this.setState({ selectedRows: rows });
            }
          }
          />
      </div>
    );
  }
}
