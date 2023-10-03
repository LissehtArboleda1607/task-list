import { useState } from 'react';

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}