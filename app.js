const express = require('express');
const mongoose = require('mongoose'); // Assuming MongoDB usage
const cors = require('cors')



const charSchema = new mongoose.Schema({
  character: String,
  message: String
});

const Detail = mongoose.model('Detail', charSchema);

const app = express();

app.use(cors())
app.use(express.json());

// Connect to database (replace with your connection details)
mongoose.connect('mongodb://localhost:27017/alpha');

app.get('/api/chars', async (req, res) => {
  try {
    const wholeData = await Detail.find(); // Fetch all documents from the 'Detail' collection
    res.json(wholeData); // Send the documents as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send an error response in case of failure
  } 
});

app.listen(3001, () => console.log('Server listening on port 3001'));
