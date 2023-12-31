import React, { useState, useEffect } from 'react';
import './App.css';
import Day from './Day';
import data from './data.json';

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
    const newTasks = data.map(dayData => {
      const tasksArray = Object.values(dayData)[0];
      return tasksArray.map(taskData => ({
        name: taskData,
        completed: false,
      }));
    });
    setTasks(newTasks);
  };

  // Initialize a flag to track if the component is being initialized
  const [isInitializing, setIsInitializing] = useState(true);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length === 0) {
      initializeTasks();
    } else {
      setTasks(savedTasks);
    }
    setIsInitializing(false); // Mark initialization as complete
  }, []);

  // Save tasks to localStorage whenever tasks change, except during initialization
  useEffect(() => {
    if (!isInitializing) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isInitializing]);

  return (
    <div className="App">
      <h1>Repte de 30 dies</h1>
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
