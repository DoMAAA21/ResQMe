import React from "react";
import GoogleMapReact from 'google-map-react';
import {Grid,Typography,Card,CardContent,Button,Box} from '@mui/material';
import { Icon } from "@iconify/react";


const AnyReactComponent =  ({ text }) => <Icon icon="majesticons:map-marker" style={{ fontSize: '40px',color:'red' }} />

// ({ text }) => <div>{text}</div>;

export default function TrackMap(){
  const defaultProps = {
    center: {
      lat: 12.8797,
      lng: 121.7740
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
<>
<Grid style={{ height: '12vh', width: '100%' }}>
<Card>
            <CardContent style={{ textAlign: 'center',backgroundColor: '#FF312E' }}>
        <Typography variant="h4" >
         Location of Zaki De Chavez
        </Typography>
      </CardContent>
        </Card>
    </Grid>
    <Grid style={{ height: '80vh', width: '100%' }}>
    <Card>
            <CardContent style={{ textAlign: 'center',backgroundColor: '#FFFFF', height: '70vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={14.520445}
          lng={121.053886}
        
        />
      </GoogleMapReact>
      </CardContent>
      </Card>
    </Grid>
    </>
  );
}