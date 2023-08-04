import React, { useState } from 'react';
import './App.css';
import Day from './Day';

function App() {
  const [tasks, setTasks] = useState([]);

  // This function updates the tasks for a specific day
  const updateTasks = (dayIndex, taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[dayIndex][taskIndex].completed = !updatedTasks[dayIndex][taskIndex].completed;
    setTasks(updatedTasks);
  };

  // Create a sample data structure for the tasks
  const initializeTasks = () => {
    const newTasks = [];
    for (let i = 0; i < 30; i++) {
      const dayTasks = [];
      for (let j = 0; j < 3; j++) {
        dayTasks.push({ name: `Task ${j + 1}`, completed: false });
      }
      newTasks.push(dayTasks);
    }
    setTasks(newTasks);
  };

  // Initialize tasks on component mount
  React.useEffect(() => {
    initializeTasks();
  }, []);

  return (
    <div className="App">
      <h1>30 Day Challenge Tracker</h1>
      <div className="days">
        {tasks.map((dayTasks, dayIndex) => (
          <Day
            key={dayIndex}
            dayIndex={dayIndex}
            tasks={dayTasks}
            updateTasks={updateTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
