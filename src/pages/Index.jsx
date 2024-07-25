import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-pink-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-pink-600">Pink Todo App</h1>
      
      <form onSubmit={addTask} className="w-full max-w-md mb-8">
        <div className="flex gap-2">
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow"
          />
          <Button type="submit" className="bg-pink-500 hover:bg-pink-600">Add Task</Button>
        </div>
      </form>

      <ul className="w-full max-w-md space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="border-pink-500 text-pink-500"
              />
              <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                {task.text}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTask(task.id)}
              className="text-pink-500 hover:text-pink-600 hover:bg-pink-100"
            >
              <Trash2 size={20} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;