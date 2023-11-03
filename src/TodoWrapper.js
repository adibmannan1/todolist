import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import {v4 as uuidv4} from 'uuid'



const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    const toggleComplete = (id) => {
        setTodos(
          todos.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo)
        )
    }
    const deleteItem = (id) => {
        setTodos(
          todos.filter(todo => todo.id !== id )
        )
    }

    const editTask = (task, id) => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing} : todo)
      )
    }
    const editTodo = (id) => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo)
      )
    }
  return (
    <div className='bg-white rounded-lg p-7 fixed top-36 left-1/2 transform -translate-x-1/2'>
        <h1 className='mb-5 font-bold'>Things To Do</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index)=>(
          todo.isEditing? 
          <EditTodoForm editTask={editTask} task={todo}/> :
          <Todo task={todo}
                key={index}
                toggleComplete={toggleComplete}
                deleteItem={deleteItem}
                editTodo={editTodo}
                />
        )
        )}
    </div>
  )
}

export default TodoWrapper