import React, {useState} from 'react'

const EditTodoForm = ({editTask, task}) => {
  const [value, setValue] = useState(task.task)

  const submitHandler = e => {
    e.preventDefault()
    if(value){
      editTask(value, task.id)
      setValue("")
    }
  }

  return (
    <form onSubmit={submitHandler} className='flex justify-between mt-5 bg-[hsl(203,0%,90%)]
    placeholder:pl-3 py-2 px-3 rounded'>
      <input onChange={e=>setValue(e.target.value)}  value={value} type='text' 
      className='outline-none bg-[hsl(203,0%,90%)]'/>
      <button type='submit'
      className='font-semibold bg-[#c087c9] px-3 py-0 rounded text-white
      hover:bg-[#9b6aa3]'>Save</button>
    </form>
  )
}

export default EditTodoForm