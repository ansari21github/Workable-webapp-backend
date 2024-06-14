const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000; // Default to 8000 if PORT is not set

const mongoDB = require('./db');

const jobRoutes = require('./Routes/jobs');
const bookmarkRoutes = require('./Routes/BookmarkRoutes');
const jobsAppliedRoutes = require('./Routes/JobsAppliedRoutes');

app.use(cors());

app.use(bodyParser.json());
app.use(express.json())

app.use('/api', jobRoutes);
app.use('/api', require("./Routes/createUser"));
app.use("/api/bookmark", bookmarkRoutes);
app.use("/api/jobsApplied", jobsAppliedRoutes);

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.listen(port, () => {
      console.log(`Example app listening on ${port}`)
    })
