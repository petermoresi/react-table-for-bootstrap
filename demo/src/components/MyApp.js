/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import {BootstrapTable} from 'react-table-for-bootstrap'

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default class MyApp extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: [{ id: 1, name: 'ref', hex: '#F00', width: 50 },
      { id: 2, name: 'green', hex: '#0F0', width: 75 },
      { id: 3, name: 'blue', hex: '#00F', width: 100 }]
    };
  }

  componentDidMount() {
    setInterval( function() {
      this.setState( { counter: (this.state.counter+1) } );
    }.bind(this), 1000);
  }

  handleRandomize() {
    var rows = this.state.rows.map((n) => {
      n.width = Math.floor(Math.random() * (100 - 50)) + 50;
      return n;
    }.bind(this));
    this.setState({ rows: rows });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRandomize.bind(this)}
          className="btn btn-primary">
          Randomize
        </button>
        <BootstrapTable
          rows={this.state.rows}
          headers={['Color', 'Hex Value']}
          columnRenderers={[
            (row) => `${row.name} (${row.hex})`,
            (row) => <span style={{
              paddingTop: 10,
              display: 'block',
              backgroundColor: row.hex,
              width: row.width + '%', height: '3em'
            }}></span>]
          } />
        </div>
      );
    }
  }
