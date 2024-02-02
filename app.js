const express = require('express');
const app = express();
const PORT = require('./configs/port');
const mongoose = require('./configs/mongoConnection');
const iphoneRoutes = require('./routes/iphoneRoutes');

mongoose.connectDB(); 
app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/iphones', iphoneRoutes);
