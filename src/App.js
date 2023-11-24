import './App.css';
import { useState } from 'react';
import CardLeft from './Components/CardLeft'
import Tasks from './Components/Tasks';
import { useTodos } from "./hooks";

function App() {

  const {
    creationCallback,
    tasksToDisplay,
    removeTask,
    createTask,
  } = useTodos();

  console.log(tasksToDisplay);



  return (
    <div className="App">
      <div className='left-container'>
        <CardLeft createTask={createTask} creationCallback={creationCallback}/>
      </div>
      <div className='right-container'>
        <h1 className='titleTask'>Liste de mes taches</h1>
        <div className='card-container'>
          
          <Tasks taskData={tasksToDisplay} removeTask={removeTask} />
        </div>
          

      </div>
      
    </div>
  );
}

export default App;
