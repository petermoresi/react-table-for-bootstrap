# react-table-for-bootstrap

[React.js](http://facebook.github.io/react/) component to generate table with [Bootstrap](http://getbootstrap.com) CSS classes.

## Installation

    npm install react-table-for-bootstrap

## Components

1. BootstrapTable

    The main component in the project.

2. TableConfig

    A bootstrap row with 6 columns and table property view/edit controls.

## Simple Example

    require('react-table-for-bootstrap').BootstrapTable
    <BootstrapTable
          rows={[{ name: 'ref', hex: '#F00' },
                 { name: 'green', hex: '#0F0' },
                 { name: 'blue', hex: '#00F' }]}
          headers={['Color', 'Hex Value']}
          columnRenderers={[
                    (row) => `${row.name} (${row.hex})`,
                    (row) => <span style={{
                      'padding-top': 10,
                      'display': 'block',
                      'background-color': row.hex,
                      'width': row.width + '%', height: '3em'
                    }}></span>]
                  } />
