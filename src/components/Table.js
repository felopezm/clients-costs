import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {
    debugger;
  const { table } = props;
  let headers = [];
  table.forEach((item,i) => {
      headers.push(Object.keys(item)[i]);      
  }); 
  console.log(headers);
  
  return (
    <div>
      <table className="table table-bordered table-hover">
      <TableHeader headers={headers}></TableHeader>
      <TableBody headers={headers} rows={table}></TableBody>
      </table>
    </div>
  );
}

export default Table;