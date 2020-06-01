import React, { useState, setState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const ArrowDarkButton = ({onTriggerLeft, onTriggerRight, dayIndex}) => {

    const [styleLeft, setStyleLeft ] =useState({display: 'none'}); 
    const [styleRight, setStyleRight ] = useState({}); 

    const isHiddenLeft=(dayIndex)=>{
        if (dayIndex===1){
            setStyleRight({});
            setStyleLeft({display: 'none'});
        }
        else{
            setStyleRight({});
            setStyleLeft({});
        }
    };
    
    const isHiddenRight=(dayIndex)=>{
        if (dayIndex===5){
          setStyleLeft({});
          setStyleRight({display: 'none'});
        }
        else {
          setStyleLeft({});
          setStyleRight({});
        }
    };
    
  return (
    <Box >
      <Button onClick={()=>{onTriggerLeft(); isHiddenLeft(dayIndex)}} style={styleLeft}>
        <KeyboardArrowLeft />
      </Button>
      <Button onClick={()=>{onTriggerRight(); isHiddenRight(dayIndex);}} style={styleRight} >
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

export default ArrowDarkButton;