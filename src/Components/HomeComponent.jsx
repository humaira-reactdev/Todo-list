import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className="flex flex-col justify-center items-center px-4"
    >
      <h1 className="text-3xl font-bold text-black mb-4">Tasks</h1>

      {/* Task Input Section */}
      <div className="w-full max-w-md flex mb-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-l focus:outline-none focus:border-blue-300"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-3 bg-[#E78F81] text-white text-[30px] font-semibold rounded-r hover:bg-blue-700 transition"
        >
          <IoIosAddCircle />
        </button>
      </div>

      {/* Task List */}
      <div className="w-full max-w-md space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded shadow-md flex justify-between items-center"
            >
              <span className="text-gray-700">{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:text-red-700 transition text-[20px]"
              >
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
