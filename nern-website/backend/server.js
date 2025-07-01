// backend/server.js
const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const { connectDB }  = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

app.get('/', (_req, res) => res.send('Satis-Fact API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
