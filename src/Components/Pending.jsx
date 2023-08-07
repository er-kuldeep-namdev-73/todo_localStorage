import React from 'react'
import Show from './Show'

const Pending = ({todoData,setTodoData}) => {

    let noncompletedData = todoData.filter(todo=>!todo.status);

  return (
    <div className='bg-dark m-5 rounded text-light p-1'>
        <p className='fs-5 m-2 rounded'>Pending</p>
        <Show todoData={todoData} list={noncompletedData} setTodoData={setTodoData}/>
    </div>
  )
}

export default Pending