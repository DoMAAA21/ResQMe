import React from 'react';
import {Grid,Typography,Card,CardContent,Button,Box} from '@mui/material';
import GpsGif from '../assets/gps.gif'

export default function AlertPage(){

    return(
        <>
          <Grid style={{ height: '14vh', width: '100%' }}>
        <Card>
            <CardContent style={{ textAlign: 'center',backgroundColor: '#FF312E' }}>
        <Typography variant="h4" >
         Location Alerted
        </Typography>
      </CardContent>
        </Card>
        </Grid>
        <Card>
        
        <Grid container spacing={2} 
        justifyContent="center"
        alignItems="center"
        style={{ height: '65vh' }} >
        {/* <Icon icon="icon-park-solid:gps" style={{ fontSize: '400px',color:'red' }} /> */}

       
            <img src={GpsGif} alt="Animated GIF" height={500} width={500}/>
            <Box display="flex" justifyContent="center" position="relative">
        <Button variant='contained'  style={{  borderRadius: '25px',
        padding: '8px 16px',
        backgroundColor: '#A4DE02',
        width: '500px', 
        height: '50px',
        color: 'white',
        '&:hover': {
        backgroundColor: '#A4DE02',
       
        },
        }}>I am already safe</Button>

        
        </Box>
        
        </Grid>

       </Card>
        </>
    );
}