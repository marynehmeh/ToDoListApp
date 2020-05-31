import React, {  useState, setState }  from 'react';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';


export function TodoForm({addTodo,date}){
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