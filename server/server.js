const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes');
const app = express();
const port = 3000;
app.use(cors());

app.use('/api', productosRoutes);

app.listen(port, () => {
  console.log(`Server corriendo en el puerto: ${port}`);
});