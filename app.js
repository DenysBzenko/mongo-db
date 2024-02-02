const express = require('express');
const app = express();
const PORT = require('./configs/port');
const mongoose = require('./configs/mongoConnection');
const iphoneRoutes = require('./routes/iphoneRoutes');

mongoose.connectDB(); 
app.set('view engine', 'pug');
app.set('views', './views');



app.use('/iphones', iphoneRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
