import React from 'react'
import Show from './Show'

const Pending = ({todoData,setTodoData}) => {

    let noncompletedData = todoData.filter(todo=>!todo.status);

  return (
    <div className='bg-light m-5'>
        <p className='fs-5'>Pending</p>
        <Show todoData={todoData} list={noncompletedData} setTodoData={setTodoData}/>
    </div>
  )
}

export default Pending