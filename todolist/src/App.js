import React, {  useState, setState }  from 'react';
import './App.css';
import { TodoForm } from './components/ToDoForm';
import { Todo } from './components/Todo';
import DenseAppBar from './components/NavBar';

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
  
  const [view, setView] = useState("week")

  const handleView = (view) => {setView(view)}

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
 //TO-DO: add filter based on view selector
  return (
    <div className='app'>
      <div className="header-container">
        <DenseAppBar handleView={handleView}/>
      </div>
    {view === 'week' ? 
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
      </div>: 
      <div className="day-container">
        <div className="day-view">
          <div className="todo-list">
            <div className="day-tag">Monday</div> 
            <TodoForm addTodo={addTodo} date="Monday" /> 
            {todos[0].tasks.map((todo,index)=> (<Todo id='task' key={index} index={index} date="Monday" todo={todo} deleteTodo={deleteTodo}/>))}
          </div>
          </div>
      </div>
        }
    </div>
  );
}

export default App;
