// Installing Express

// Creating a server

// Setting up routes: GET, POST, PUT, DELETE

// Using req and res

// Creating a small REST API (e.g., a simple todo list in-memory)



const express = require('express');
const app = express();      
const port = 3000;


let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build an API' }
];
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
});
app.get('/todos', (req, res) => {
  res.json(todos);
});


app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    task: req.body.task
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });

  todo.task = req.body.task;
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: 'Todo deleted' });
});


app.use(express.json()); // Middleware to parse JSON bodies
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}); 