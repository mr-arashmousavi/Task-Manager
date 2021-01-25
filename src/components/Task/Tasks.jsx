/** @format */

import React, { Component } from 'react';
import Task from './Task';

const Tasks = ({ alltask, Delete, taskCehged }) => {
  return (
    <div>
      {alltask.map((task) => (
        <Task
          key={task.id}
          name={task.name.trim()}
          Delete={() => Delete(task.id)}
          Chenged={(event) => taskCehged(event, task.id)}
        />
      ))}
    </div>
  );
};

export default Tasks;
