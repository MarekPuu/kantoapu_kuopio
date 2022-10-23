const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();

//Routes
const authRoutes = require('./routes/authRoutes');
const tehtavatRoutes = require('./routes/tehtavatRoutes');
const tyotunnitRoutes = require('./routes/tyotunnitRoutes');

//Middlewares
const requireAuth = require('./middleware/requireAuth');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    version: '0.0.1',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/tehtavat', requireAuth, tehtavatRoutes);
// app.use('/api/kalenteri');
app.use('/api/tyotunnit', requireAuth, tyotunnitRoutes);
// app.use('/api/profiili');

app.use(errorHandler);

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log('Yhdistetty tietokantaan'))
  .then(() => {
    app.listen(port, () => {
      console.log(`Serveri on käynnissä portissa ${port}`);
    });
  })
  .catch((err) => console.log('Starting up error:', err));
