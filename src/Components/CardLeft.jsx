import React from 'react';
import { useState } from 'react';
import './CardLeft.css'

const CardLeft = ({createTask, creationCallback = () => {} }) => {

  const [title, setTitle] = useState("");

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const create = async () => {
    try {
      // Create tasks
      const newTask = await createTask(title);
      // Reset field
      setTitle("");
      // Update list
      creationCallback(newTask);
    } catch (err) {
      alert(err);
    }
  };
  

  return (
    <div className='main-container'>
      <h2>Ajouter une tache</h2>
      <form className='form'>
      <input className='input'
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleChange}
        
      />
      <div className='Button' type="button" value="Ajouter" onClick={create}>Ajouter</div>
    </form>

    </div>
    
  );
};


export default CardLeft;