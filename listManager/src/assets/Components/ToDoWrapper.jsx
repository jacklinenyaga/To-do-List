import React from 'react';
import { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { uuidv4 } from 'uuid';
uuidv4();

export const ToDoWrapper = () => {
    const {ToDo, setToDo} = useState([])

    const addToDo = ToDo => {
        setToDo([...ToDo, {id: uuidv4(), task: ToDo, completed: false, isEditing: false}])
        console.log(ToDo)
    }
    return (
        <div>
            <ToDoForm addToDo = {addToDo}/>
        </div>
    );
}; 