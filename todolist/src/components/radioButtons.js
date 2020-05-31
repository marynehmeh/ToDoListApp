import Radio from '@material-ui/core/Radio';
import { withStyles, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { green, red, orange } from '@material-ui/core/colors';
import React, {  useState, setState }  from 'react';

const colors = {
    red: "#fd9191",
    orange: "#fdc791",
    green: "#91fdc7"
}

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio size="small" color="default" {...props} />);

const RedRadio = withStyles({
    root: {
      color: red[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Radio size="small" color="default" {...props} />);

const OrangeRadio = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
  })((props) => <Radio size="small" color="default" {...props} />);

export default function RadioButtons({onTrigger, onChangePriority}) {
    const [selectedValue, setSelectedValue] = useState('toDo');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div>
        <RedRadio
          checked={selectedValue === 'toDo'}
          onChange={handleChange}
          onClick={() => {onTrigger(colors.red); onChangePriority(0);}}
          value="toDo"
          name="radio-button"
          inputProps={{ 'aria-label': 'TODO' }}
        />
        <OrangeRadio
          checked={selectedValue === 'inProgress'}
          onChange={handleChange}
          onClick={() => { onTrigger(colors.orange); onChangePriority(1);} }
          value="inProgress"
          name="radio-button"
          inputProps={{ 'aria-label': 'INPROGRESS' }}
        />
        <GreenRadio
          checked={selectedValue === 'done'}
          onChange={handleChange}
          onClick={() => {onTrigger(colors.green); onChangePriority(2);}}
          value="done"
          name="radio-button"
          inputProps={{ 'aria-label': 'DONE' }}
        />
      </div>
    );
  }
  