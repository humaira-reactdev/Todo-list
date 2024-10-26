import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { FiEdit, FiSave } from "react-icons/fi";

const HomeComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditingTask = (index) => {
    setEditingTaskIndex(index);
    setEditingText(tasks[index]);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editingText;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setEditingText('');
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
      <div className="heading flex justify-center items-center gap-[10px]">
        <VscChecklist className="text-[35px] align-middle leading-none"/>
        <h1 className="text-3xl font-bold text-black mb-4 leading-none">Tasks</h1>
      </div>
      
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
          className="px-4 py-3 bg-[#E78F81] text-white text-[30px] font-semibold rounded-r hover:bg-[#3B1E54] transition"
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
              {editingTaskIndex === index ? (
                // Editing mode
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-grow border-b-2 border-blue-300 focus:outline-none"
                />
              ) : (
                // View mode
                <span className="text-gray-700">{task}</span>
              )}
              
              <div className="flex gap-2">
                {editingTaskIndex === index ? (
                  <button
                    onClick={() => handleSaveTask(index)}
                    className="text-green-500 hover:text-green-700 transition text-[20px]"
                  >
                    <FiSave />
                  </button>
                ) : (
                  <button
                    onClick={() => startEditingTask(index)}
                    className="text-blue-500 hover:text-blue-700 transition text-[20px]"
                  >
                    <FiEdit />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700 transition text-[20px]"
                >
                  <MdDelete />
                </button>
              </div>
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
