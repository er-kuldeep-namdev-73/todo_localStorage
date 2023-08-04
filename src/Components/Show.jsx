import React from 'react'

const Show = ({ todoData,list,setTodoData }) => {

    // console.log(todoData)

    const handleStatusChange = (e, id) =>
    {
        let copyTodoData = [...todoData];
        copyTodoData.map(todo=>
            {
                if(todo.id === id)
                {
                    todo.status = true;
                }
            })
        setTodoData(copyTodoData)
    }

    function handleDelete(e,id){
        localStorage.removeItem(todoData.title)
        console.log(id)
    }

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Completed</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    todoData.length !== 0 && list.map((data, index) => {
                        return (
                            <tbody key={index+1}>
                                <tr key={index+2}>
                                    <td key={index+3}>{index + 1}</td>
                                    <td key={index+4}><input type="checkbox" onChange={(e)=>handleStatusChange(e, data.id)}/></td>
                                    <td key={index+5}>{data.title}</td>
                                    <td><button key={index} className='btn btn-danger' onClick={(e)=>handleDelete(e,data.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Show