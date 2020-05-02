const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(
  'mongodb+srv://root:w4xh7PWWkhCtwHFo@cluster0-cyb56.mongodb.net/test?retryWrites=true&w=majority',
  { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
)

app.listen(3333, () => console.log('servidor rodando em: http://localhost:3333'));

