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
         EarthQuake Monitoring
        </Typography>
      </CardContent>
        </Card>
    </Grid>
    <Grid container spacing={3}>
    <Grid  item xs={8} sm={6} lg={8}>
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
    <Grid   item xs={4} sm={6} lg={4} style={{ height: '80vh', width: '20%' }}>
    <Card>
      <CardContent>
        <Typography variant="h3"> 
            Southwest of Palawan Sea 
        </Typography>
        <Typography variant="h2"> 
            Magnitude 2.3
        </Typography>
        
      </CardContent>
      </Card>
    </Grid>
    </Grid>
    </>
  );
}