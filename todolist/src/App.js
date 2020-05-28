import React, { Component, useState, setState }  from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';


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
  <form>
    <input type="text" className="input" placeholder='Add new task' value={value} onChange={e=> setValue(e.target.value)} />
    <IconButton aria-label="add" onClick={handleSubmit}>
      <Add/>
    </IconButton>
  </form>
  );
}

function Todo({index, todo, date, deleteTodo}){
  return (
    <div className="todo">{todo.text}
                              <IconButton aria-label="delete" onClick={()=> deleteTodo(index, date)}>
                                <DeleteIcon />
                              </IconButton>
    </div>
  )

}

function App() {
 
  const [todos, setTodos] = useState([
    { day: 'Monday',
      tasks: [ ] } ,
    { day: 'Tuesday',
      tasks: [ ] } ,
    { day: 'Wedsnesday',
      tasks: [ ] } ,
    { day: 'Thursday',
      tasks: [ ] } ,
        { day: 'Friday',
      tasks: [ ] } ,
        { day: 'Saturday',
        tasks: [ ] } ,
          { day: 'Sunday',
      tasks: [ ] } ,
  ]);

  const addTodo = (value,date) => {
    const dayTodo = todos.filter(day => day.day === date)[0]; 
    dayTodo.tasks = [...dayTodo.tasks, {text: value}]
    const newTodos = [...todos];
    setTodos(newTodos); 
  }

  const deleteTodo = (index,date) => {
    const dayTodo = todos.filter(day => day.day === date)[0];
    dayTodo.tasks.splice(index,1);
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
            {day.tasks.map((todo,index)=> (<Todo id='task' key={index} index={index} date={day.day} todo={todo} deleteTodo={deleteTodo}/>))}
          </div>
          </div>
      ))}
      </div>
    </div>
  );
}

export default App;
