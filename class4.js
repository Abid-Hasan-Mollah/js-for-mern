// get,post,put,delete

const express = require('express');
const app = express();      
const port = 4000;  

app.use(express.json());
app.use(express.json()); // Middleware to parse JSON bodies 
let todos = [
  { id: 1, task: 'Learn Node.js' },             
    { id: 2, task: 'Build an API' }
];


app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
});
app.get('/todos', (req, res) => {
  res.json(todos);
}   );
app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: 'Task is required' });
  }

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    task: task
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});
app.listen(port, () => {            
    console.log(`Server running at http://localhost:${port}/`);
} );