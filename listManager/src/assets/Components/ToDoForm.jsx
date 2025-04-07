import React from "react";
import { useState} from 'react';

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState ("")

    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value)
    }
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input
            type='text'
            className='todo-input'
            placeholder='Enter item .....'
            onChange={(e) => setValue(e.target.value)}
            />
            <button 
            type='submit'
            className='todo-btn'>
            Add Item
            </button>
        </form>
    );
}; 