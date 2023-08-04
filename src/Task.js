import React from 'react';

function Task({ dayIndex, taskIndex, task, updateTasks }) {
  const handleCheckboxChange = () => {
    updateTasks(dayIndex, taskIndex);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <label>
        <label class="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </label>
        {task.name}
      </label>
    </div>
  );
}

export default Task;
