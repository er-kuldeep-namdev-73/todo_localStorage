import React from 'react'
import Show from './Show'
const Completed = ({todoData,check,setTodoData}) => {

    let completedData = todoData.filter(todo=>todo.status);

  return (
    <div className='bg-light m-5'>
        <p className='fs-5'>Completed</p>
        <Show todoData={todoData} check={check} list={completedData} setTodoData={setTodoData}/>
    </div>
  )
}

export default Completed