import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function DisableElevation() {
  return (
    
    <ButtonGroup disableElevation variant="contained" color="primary">
        <br/>
        <div><h1>DISABLED ELEVATION BUTTON</h1></div>
        
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}
