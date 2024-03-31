import React, {useState} from "react"
function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((elem, ind) => ind !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateedTasks = [...tasks];
            [updateedTasks[index], updateedTasks[index-1]] = [updateedTasks[index-1], updateedTasks[index]];
            setTasks(updateedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateedTasks = [...tasks];
            [updateedTasks[index], updateedTasks[index+1]] = [updateedTasks[index+1], updateedTasks[index]];
            setTasks(updateedTasks);
        }
    }

    return(
        <div className = "to-do-list">

            <h1>To-Do</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index)=>{
                    return <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                        </li>
                })}
            </ol>

        </div>
    )
}
export default ToDoList;