import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Cars from './components/Cars/Cars'
import Form from './components/Form/Form'
import cars from './images/ferrari.jpg'

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant='h2' align='center'>Cars</Typography>
                <img src={cars} alt="cars" height="700" />
            </AppBar>
            <Grow in>
                 <Container>
                     <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                         <Grid item xs={12} sm={7}>
                            <Cars />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                             <Form />
                         </Grid>
                     </Grid>
                 </Container>
            </Grow>
        </Container>
    );
}

export default App;