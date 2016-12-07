import React from 'react';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const EmptyRowComponent = () => {
  return <TableRow key="0">
    <TableRowColumn>No car available</TableRowColumn>
  </TableRow>
};

export default props => {
  return <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Model</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Color</TableHeaderColumn>
        <TableHeaderColumn>Year</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {props.cars.length <= 0 ? <EmptyRowComponent/> : props.cars.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.model}</TableRowColumn>
          <TableRowColumn>{row.price}</TableRowColumn>
          <TableRowColumn>{row.color}</TableRowColumn>
          <TableRowColumn>{row.year}</TableRowColumn>
          <TableRowColumn>
            {row.isSell ? <FlatButton
              label="Stop Sell"
              onClick={() => props.changeSell(row.id)}
            /> : <FlatButton
              label="Start Sell"
              onClick={() => props.changeSell(row.id)}
            />}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
};