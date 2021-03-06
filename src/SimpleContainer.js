import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h1>Muhammad Javaid Nawab - Container</h1> 
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
     
       </Container>
    </React.Fragment>
  );
}
