import React from 'react'

const Show = ({ todoData, list, setTodoData }) => {

    // console.log(todoData)

    const handleStatusChange = (e, id) => {
        let copyTodoData = [...todoData];
        copyTodoData.map(todo => {
            if (todo.id === id) {
                todo.status = !todo.status
            }
        })
        setTodoData(copyTodoData)
    }

    function handleDelete(e, id) {
        let del = window.confirm("Do You Want to Delete this Item!")
        if (del) {
            let removeData = [...todoData];
            removeData = removeData.filter((todo) => {
                return todo.id !== id
            })
            setTodoData(removeData)
        }
    }

    return (
        <div>
            <table className='table table-striped rounded'>
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
                            <tbody key={index + 1}>
                                <tr key={index + 2}>
                                    <td key={index + 3}>{index + 1}</td>
                                    <td key={index + 4}><input type="checkbox" onChange={(e) => handleStatusChange(e, data.id)} checked={data.status} /></td>
                                    <td key={index + 5}>{
                                        data.priority === "high" ? <p className='fs-5 text-danger'>{data.title}</p> : data.priority === "medium" ? <p className='fs-5 text-warning'>{data.title}</p> : data.priority === "low" ? <p className='fs-5 text-success'>{data.title}</p> : <p>{data.title}</p>
                                    }</td>
                                    <td><button key={index} className='btn btn-danger' onClick={(e) => handleDelete(e, data.id)}>Delete</button></td>
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