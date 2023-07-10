import React from 'react';
import {Grid,Typography,Card,CardContent,Button,Box} from '@mui/material';
import MapWithDirections from './MapWithDirections';

const MapEscort = () => {
  return (
    <>
    <Grid style={{ height: '14vh', width: '100%' }}>
    <Card>
            <CardContent style={{ textAlign: 'center',backgroundColor: '#FF312E' }}>
      <Typography variant="h4">Directions</Typography>
      </CardContent>
      </Card>
      <Card>
        <CardContent>
      <MapWithDirections />
      </CardContent>
      </Card>
      </Grid>
      </>
  );
};

export default MapEscort;
