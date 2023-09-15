import React, { useState } from 'react'; 
import styles from './page.module.css';

function Home() {

  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');
  const [newDate, setNewDate] = React.useState('');
  const [newDescription, setNewDescription] = React.useState('');


  const addTask = () => {
    if (newTask && newDate && newDescription) {
      const taskObject = {
        task: newTask,
        date: newDate,
        description: newDescription,
        done: false,
      };
      setTasks([...tasks, taskObject]);
      setNewTask('');
      setNewDate('');
      setNewDescription('');
    }
   
   
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
   
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setNewTask(tasks[index].task);
    setNewDate(tasks[index].date);
    setNewDescription(tasks[index].description);
 
  };
  const markDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  }

  return (
    
 <body className={styles.body}>
  <head>
  <title>Task List</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
</head>

    <div className={styles.container}>
     
      <h1>Task List</h1>
      <div className={styles.tasklistform}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <hr />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <hr />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button className={styles.button} onClick={addTask}>
          Add
        </button>
      </div>
      </div>
   
    
      <section className={styles.showtasks}>
    
          {tasks.map((task, index) => (
             <ul>
            <li key={index}>
         
              <strong className={styles.text}>{task.task} - {task.date} - {task.description}</strong>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => markDone(index)}>Done</button>
            
            </li>
           </ul>
          ))}
          
      </section>
      </body>
   
    
  );
}

// Use useClient desta forma

export default Home;
