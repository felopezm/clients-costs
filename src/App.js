import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Table from './components/Table';

function App() {

  const [dataTable, saveDataTable] = useState([]);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let hojas = [];
    if (name === 'file') {
      let reader = new FileReader();
      reader.readAsArrayBuffer(target.files[0]);
      reader.onloadend = (e) => {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        workbook.SheetNames.forEach(function (sheetName) {
          // Here is your object
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          hojas.push({
            data: XL_row_object,
            sheetName
          });
        });
        console.log(hojas);
        saveDataTable(hojas);
      }
    }
  }
  return (

    <div className="container p-2">
      <input
        required
        type="file"
        name="file"
        id="file"
        onChange={handleInputChange}
        placeholder="Excel"
      />
      <div className="row">
        <div className="col">
          {dataTable.map((table, index) => (
            <Table key={index} table={table.data} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
