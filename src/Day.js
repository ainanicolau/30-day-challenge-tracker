import React from 'react';
import Task from './Task';

function Day({ dayIndex, tasks, updateTasks }) {
  const allTasksCompleted = tasks.every(task => task.completed);
  const isOddRow = dayIndex % 2 == 0;

  return (
    <div className="row">
      <div className={`day ${allTasksCompleted ? 'completed' : ''} ${isOddRow ? '' : 'isEvenRow'}`}>
        <div className="day-content">
          <h2>Dia {dayIndex + 1}</h2>
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
      </div>
      {isOddRow && (
        <div className="image-container">
          <img src="logo192.png" alt="Image" />
        </div>
      )}
    </div>
  );
}

export default Day;
