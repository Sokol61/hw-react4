import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <TextField
        label="Новая задача"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button onClick={handleAddTask} variant="contained" sx={{ marginTop: 2 }}>Добавить</Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
