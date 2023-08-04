import React,{useState,useEffect, useRef} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Add from './Components/Add'
import Completed from './Components/Completed'
import Pending from './Components/Pending'
import { Button } from '@mui/material'

const App = () => {

  const [todoData, setTodoData] = useState([])
  const [check,setCheck]=useState(true)
  let ind = useRef(1);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("todoData"))
        if (data) {
            setTodoData(data)
        }
    },[])

    useEffect(()=>{
      localStorage.setItem("todoData", JSON.stringify(todoData))
  },[todoData])



  return (
    <div>
      <Completed todoData={todoData} setTodoData={setTodoData} check={check}/>
      <Pending  todoData={todoData} setTodoData={setTodoData} check={check}/>
      <Add  ind={ind} todoData={todoData} setTodoData={setTodoData}/>
      <Button variant="contained" color="success" className="ms-5">Clear All Completed Task</Button>
    </div>
  )
}

export default App