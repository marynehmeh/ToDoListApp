import React, {  useState, setState }  from 'react';
import './App.css';
import { TodoForm } from './components/ToDoForm';
import { Todo } from './components/Todo';

function App() {
 
  const [todos, setTodos] = useState([
    { day: 'Monday',
      tasks: [ ] } ,
    { day: 'Tuesday',
      tasks: [ ] } ,
    { day: 'Wednesday',
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
    <div>
    <header className="app-header"> 
    <p>
    Weekly To-Do List
    </p>
    </header>
    <div className="app">
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
    </div>
  );
}

export default App;
