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

  const balls = [
    { color: 'bg-red-500', size: 'w-16 h-16', animation: 'animate-bounce-slow' },
    { color: 'bg-orange-500', size: 'w-12 h-12', animation: 'animate-bounce-medium' },
    { color: 'bg-yellow-500', size: 'w-20 h-20', animation: 'animate-bounce-fast' },
    { color: 'bg-green-500', size: 'w-14 h-14', animation: 'animate-bounce-slow' },
    { color: 'bg-blue-500', size: 'w-10 h-10', animation: 'animate-bounce-medium' },
    { color: 'bg-indigo-500', size: 'w-18 h-18', animation: 'animate-bounce-fast' },
    { color: 'bg-purple-500', size: 'w-8 h-8', animation: 'animate-bounce-slow' },
  ];

  return (
    <div className="relative min-h-screen bg-pink-100 overflow-hidden">
      {balls.map((ball, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${ball.color} ${ball.size} ${ball.animation}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.7,
          }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-8">
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
                  className="border-pink-500 data-[state=checked]:bg-pink-500 data-[state=checked]:text-white"
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
    </div>
  );
};

export default Index;