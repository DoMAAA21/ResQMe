import React, { useState } from 'react';
import { TextField, Button, Grid, Checkbox,Card,CardContent,Typography } from '@mui/material';

const EmergencyPlan = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, checked: false }]);
      setNewTask('');
    }
  };

  const handleCheckboxChange = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].checked = !updatedTasks[index].checked;
      return updatedTasks;
    });
  };

  return (
    <Card>
          <CardContent >
            <CardContent>
          <Typography align="center" variant="h4" >
         My Personal Emergency Plan
        </Typography>
        </CardContent>
    <Grid container spacing={2}>
     
   
      {tasks.map((task, index) => (
        <Grid item xs={12} key={index}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Checkbox
                checked={task.checked}
                onChange={() => handleCheckboxChange(index)}
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Emergency Task"
                variant="outlined"
                fullWidth
                value={task.task}
                disabled={task.checked}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={9}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={handleTaskChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          disabled={!newTask}
          fullWidth
        >
          Add
        </Button>
      </Grid>
      
    </Grid>
    </CardContent>
      </Card>
  );
};

export default EmergencyPlan;
