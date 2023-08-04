import React from 'react';

function Task({ dayIndex, taskIndex, task, updateTasks }) {
  const handleCheckboxChange = () => {
    updateTasks(dayIndex, taskIndex);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-custom"></span>
        {task.name}
      </label>
    </div>
  );
}

export default Task;
