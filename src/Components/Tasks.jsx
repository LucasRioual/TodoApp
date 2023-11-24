import React from 'react';
import './Tasks.css'

const TaskCard = (props) => {
  const items = props.taskData.map((item, index) => {
    return (
      <div key={index} className='task-container'>
        <h3 className='Titre'>{item.title}</h3>
        <div className='remove-btn' onClick={() => props.removeTask(item.id)}>Supprimer</div>
       
    </div>
    )
  })

  return <div className='container'>{items}</div>
  
};


const Tasks = (props) => {
  return(
    <div>
      <TaskCard taskData={props.taskData} removeTask={props.removeTask} />
    </div>
  )

}

export default Tasks;
