import React, { useState } from 'react';
import { useTaskManager } from './useTaskManager';

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleCreateTask = () => {
    createTask({ id: Date.now(), text: newTask });
    setNewTask('');
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSaveTask = (taskId, newText) => {
    updateTask({ id: taskId, text: newText });
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleSaveTask(task.id, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => handleEditTask(task.id)}>Editar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleCreateTask}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default TaskList;