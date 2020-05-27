import React, { Component, useState, setState }  from 'react';
import './App.css';

function TodoForm({addTodo,date}){
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (value){
    addTodo(value,date); 
    setValue("");
    }
    else {
      return;
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" className="input" placeholder='Add new task' value={value} onChange={e=> setValue(e.target.value)} />
  </form>
  );
}


function App() {
  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;
  const [todos, setTodos] = useState([
    { day: 'Monday',
      tasks: [ {
        text: "Learn about React"
      } ] } ,
    { day: 'Tuesday',
      tasks: [ {
       text: "Grocery shopping"
       } ] } ,
    { day: 'Wedsnesday',
      tasks: [ {
      text: "Clean house"
        } ] } ,
    { day: 'Thursday',
      tasks: [ {
      text: "Clean house"
        } ] } ,
        { day: 'Friday',
      tasks: [ {
      text: "Clean house"
        } ] } ,
        { day: 'Saturday',
        tasks: [ {
        text: "Clean house"
          } ] } ,
          { day: 'Sunday',
      tasks: [ {
      text: "Clean house"
        }, {
          text: "Laundry"
            }  ] } ,
  ]);
 
  const addTodo = (value,date) => {
    const dayTodo = todos.filter(day => day.day === date)[0]; 
    dayTodo.tasks = [...dayTodo.tasks, {text: value}]
    const newTodos = [...todos];
    setTodos(newTodos); 
  }

  return (
    <div className="app">
      <header className="app-header"> 
      <p>
      Weekly To-Do List
      </p>
      </header>
      <div className='days'>
        {todos.map((day,index)=>(
          <div className="day">
          <div className="todo-list">
            <div className="day-tag">{day.day}</div> 
            <TodoForm addTodo={addTodo} date={day.day} />
            {day.tasks.map((todo,index)=> (<Todo id='task' key={index} index={index} todo={todo} /> ))}
          </div>
          </div>
      ))}
      </div>
    </div>
  );
}

export default App;
