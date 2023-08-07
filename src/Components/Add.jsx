import React, { useState } from 'react'
import { Button } from '@mui/material';

const Add = ({ todoData, setTodoData }) => {

    const [value1, setValue1] = useState({
        title: "",
        priority: "",
        status: false
    })
    const [render, setRender] = useState(false)

    function handleChange(e) {
        setValue1({ ...value1, [e.target.name]: e.target.value, status: false })
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        e.target.reset();
        if (value1.title === "" && value1.priority === "") {
            alert("Please Enter the Value")
        }
        else if (value1.title === "" || value1.priority === "") {
            alert("Please Enter the Value")
        }
        else {
            let index = todoData.slice(-1)[0]?.id
            if (index) {
                setTodoData([...todoData, { ...value1, id: ++index }]);
            }
            else {
                setTodoData([...todoData, { ...value1, id: 1 }]);
            }
        }
        setValue1({
            title: "",
            priority: "",
            status: false
        })
        setRender(true)
        setTimeout(() => {
            setRender(false)
        }, 10)
    }

    return (
        <div className='w-50'>
            <form className='bg-light m-5 border-3 border w-75 rounded form-control' onSubmit={handleAddItem}>
                <div className='p-3'>
                    <label className='text-start mb-2 fs-5 text-primary'>Add Item</label><br />
                    <input id="addItem" name="title" placeholder="Please Enter the Item" className='w-100 form-control' onChange={(e) => handleChange(e)} />
                    <label className='mt-2 fs-5 text-primary'>Priority</label>
                    {
                        !render &&
                        <select className='form-select bg-dark text-light' onChange={(e) => handleChange(e)} name="priority">
                            <option disabled selected className='text-light' value={"select"}>---Please Select Priority---</option>
                            <option value={"high"} className='text-danger'>high</option>
                            <option value={"medium"} className='text-warning'>medium</option>
                            <option value={"low"} className='text-success'>low</option>
                        </select>
                    }
                    <Button className='btn btn-success mt-2 w-50' variant='contained' type
                        ="submit">Add Item</Button>
                </div>
            </form>
        </div>
    )
}

export default Add