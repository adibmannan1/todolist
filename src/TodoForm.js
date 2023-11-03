import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    if(value){
      addTodo(value)
      setValue("")
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={e=>setValue(e.target.value)}  value={value} placeholder='What to do next?' type='text' 
      className='outline-none placeholder:pl-3'/>
      <button type='submit'
      className='font-semibold bg-[#ff5a57] px-3 py-2 rounded text-white
      hover:bg-[#ed504d]'>Add Task</button>
    </form>
  )
}

export default TodoForm