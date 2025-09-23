const express = require('express');
const XLSX = require('xlsx');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/datos', (req, res) => {
  const workbook = XLSX.readFile('tabla.xlsx'); // tu archivo Excel
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const datos = XLSX.utils.sheet_to_json(sheet);
  res.json(datos);
});

app.listen(3000, () => console.log('🌟 API híbrida escuchando en http://localhost:3000/datos'));
