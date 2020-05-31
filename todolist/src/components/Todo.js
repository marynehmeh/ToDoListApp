import React, {  useState, setState }  from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtons  from './radioButtons';
import IconButton from '@material-ui/core/IconButton';

export function Todo({index, todo, date, deleteTodo}){
    const [colour, setColour] = useState("default");
    const [priority, setPriority] = useState(0);

    const handleColour = (colour) => {setColour(colour)};
    const handlePriority = (priority) => {setPriority(priority)}; 

    return (
      <div className="todo" style={{ "backgroundColor": colour, 'order': priority}}><p>{todo.text}</p>
        <div className="icons">
         <RadioButtons onTrigger={handleColour} onChangePriority={handlePriority}/>
          <IconButton aria-label="delete" size="small" onClick={()=> deleteTodo(index, date)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    )
  
  }
  