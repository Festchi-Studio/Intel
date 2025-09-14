const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const authRoutes = require('./routes/auth');
const jiraRoutes = require('./routes/jira');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/jira', jiraRoutes);
app.use('/api/dashboard', dashboardRoutes);

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;