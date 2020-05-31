import React, {  useState, setState }  from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtons  from './radioButtons';
import IconButton from '@material-ui/core/IconButton';

export function Todo({index, todo, date, deleteTodo}){
    const [colour, setColour] = useState("default");
  
    const handleTrigger = (colour) => {setColour(colour)};
  
    return (
      <div className="todo" style={{ "backgroundColor": colour}}><p>{todo.text}</p>
        <div className="icons">
         <RadioButtons onTrigger={handleTrigger}/>
          <IconButton aria-label="delete" onClick={()=> deleteTodo(index, date)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    )
  
  }
  