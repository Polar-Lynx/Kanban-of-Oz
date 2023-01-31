// library import
import express  from 'express';

// invokes function and stores a reference to Express 
const app = express();

// declares which port to listen for connections
const port = 3000;

// defines response to the '/' route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// starts listening for connections
app.listen(port, () => {
  console.log(`Kanban server listening on port ${port}`);
});