import { useState } from 'react'
export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setinputValue] = useState([]);
    const [clickedIndex, setClickedIndex] = useState([]);

    const handleChangeInput = (event) => {
        setinputValue(event.target.value);
    }

    const handleAddTask = () => {
        if(inputValue.trim() !== ""){
            setTasks([...tasks, inputValue]);
        }
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
  
    const handleCompleteTask = (index) => {
        setClickedIndex([...clickedIndex, index]);
    }

    return(
        <>
            <div className="todo-wrap">
                <div className="todo-header">
                    <h1 className="todo-headerText">ToDoApp by <a href="#">N3nT</a></h1>
                </div>
                <div className="todo-main">
                    <div className="todo-addTask">
                        <input type="text" placeholder='Task name' className='todo-addTaskInput' onChange={handleChangeInput} value={inputValue}/>
                        <button className="todo-addTaskButton" onClick={handleAddTask}>Add</button>
                    </div>
                    <div className="todo-tasksWrap">
                        {tasks.map((task, index) => 
                            <div className={clickedIndex.includes(index) ? "todo-task todo-taskComplete" :"todo-task" } key={index}>
                                <span className="todo-taskName">{task}</span>
                                <button className="todo-completeButton" onClick={() => handleCompleteTask(index)}>Complete</button>
                                <button className="todo-deleteButton" onClick={() => handleDeleteTask(index)}>Delete</button>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}