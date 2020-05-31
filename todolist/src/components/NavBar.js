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

function ControlledOpenSelect() {
    const classes = useStyles();
    const [view, setView] = useState('week');
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
      setView(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
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
            onChange={handleChange}
            label="View"
          >
            <MenuItem value={'day'}>Daily</MenuItem>
            <MenuItem value={'week'}>Weekly</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

export default function DenseAppBar() {

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
          <ControlledOpenSelect />
        </Toolbar>
      </AppBar>
    </div>
  );
}



