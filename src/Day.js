import React from 'react';
import Task from './Task';

function Day({ dayIndex, tasks, updateTasks }) {
  const allTasksCompleted = tasks.every(task => task.completed);

  return (
    <div className={`day ${allTasksCompleted ? 'completed' : ''}`}>
      <h2>Day {dayIndex + 1}</h2>
      <div className="tasks">
        {tasks.map((task, taskIndex) => (
          <Task
            key={taskIndex}
            dayIndex={dayIndex}
            taskIndex={taskIndex}
            task={task}
            updateTasks={updateTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default Day;
