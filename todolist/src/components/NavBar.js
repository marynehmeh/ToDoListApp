import React, { useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: "#FDFD91"
    },
  }));

function ControlledOpenSelect({onTrigger}) {
    const classes = useStyles();
    const [view, setView] = useState("day");
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const onChange = (event) => {
        setView(event.target.value);
        onTrigger(view);
    }
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="view" >View</InputLabel>
          <Select
            labelId="view"
            id="view"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={view}
            onChange={(event)=>{onChange(event)}}
            label="View"
          >
            <MenuItem value={'week'}>Daily</MenuItem>
            <MenuItem value={'day'}>Weekly</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

export default function DenseAppBar({handleView}) {

  return (
    <div className="nav-bar">
      <AppBar position="static" style={{ background: '#9191FD' }} >
        <Toolbar variant="dense">
            <div className="logo">
            <PlaylistAddCheckIcon className="icon" size="large"/>
          <Typography variant="h5" color="inherit">
            toDoIt
          </Typography>
          </div>
          <ControlledOpenSelect onTrigger={handleView} />
        </Toolbar>
      </AppBar>
    </div>
  );
}



