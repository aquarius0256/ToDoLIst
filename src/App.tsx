import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        { id: 3, title: "ReactJS", isDone: false},
        { id: 4, title: "REDUX", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello World", isDone: true},
        {id: 2, title: "I am happy", isDone: false},
        { id: 3, title: "Yo", isDone: false},
        { id: 4, title: "Yo-yo", isDone: false}
    ]
    return (
        <div className="App">
            <ToDoList title="What to learn" tasks={tasks1}/>
            <ToDoList title="Songs" tasks={tasks2}/>
            {/*<ToDoList title="Books"/>*/}
            {/*<ToDoList title="Openings"/>*/}
        </div>
    );
}

export default App;
