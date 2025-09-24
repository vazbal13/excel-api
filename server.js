const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');

const app = express();
app.use(cors()); // 👈 habilita que tu frontend en Vercel pueda leer la API

// Cargar Excel
const workbook = xlsx.readFile('tabla.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Ruta principal
app.get('/datos', (req, res) => {
  res.json(data);
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌟 API escuchando en el puerto ${PORT}`);
});
