import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteItem, editTodo}) => {
  return (
    <div className='flex justify-between mt-5 bg-[hsl(203,0%,95%)] py-2 px-3 rounded '>
      <p className={`${task.completed && `completed`} cursor-pointer`}
      onClick={()=> toggleComplete(task.id)}
      >{task.task}</p>
      <div>
        <FontAwesomeIcon className='edit-icon cursor-pointer' icon={faPenToSquare}
        onClick={()=> editTodo(task.id)}/>
        <FontAwesomeIcon className='delete-icon cursor-pointer pl-3' icon={faTrash}
        onClick={()=> deleteItem(task.id)}/>
      </div>
    </div>
  )
}

export default Todo