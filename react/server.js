const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Ruta de ejemplo
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hola desde el servidor!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

