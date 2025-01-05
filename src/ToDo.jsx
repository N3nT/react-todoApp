import { useState } from 'react'
export default function ToDo() {
    //const [tasks, setTasks] = useState([]);
    return(
        <>
            <div className="todo-wrap">
                <div className="todo-header">
                    <h1 className="todo-headerText">ToDoApp by <a href="#">N3nT</a></h1>
                </div>
                <div className="todo-main">
                    <div className="todo-addTask">
                        <input type="text" placeholder='Task name' className='todo-addTaskInput'/>
                        <button className="todo-addTaskButton">Add</button>
                    </div>
                    <div className="todo-tasksWrap">
                        <div className="todo-task">
                            <span className="todo-taskName">Make ToDo App</span>
                            <button className="todo-completeButton">Complete</button>
                            <button className="todo-deleteButton">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}