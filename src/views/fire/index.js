import React, { useState } from "react";
import { Grid, Button, Alert,Card,CardContent,Typography } from "@mui/material";

const FireAlarmMonitoringSystem = () => {
  const [alarms, setAlarms] = useState([
    {
      id: 1,
      location: "Area 1",
      status: "Active",
    },
    {
      id: 2,
      location: "Area 2",
      status: "Inactive",
    },
    {
      id: 3,
      location: "Area 3",
      status: "Inactive",
    },
    {
      id: 4,
      location: "Area 4",
      status: "Inactive",
    },
  ]);

  const handleToggleAlarm = (id) => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.id === id) {
        alarm.status = alarm.status === "Active" ? "Inactive" : "Active";
      }
      return alarm;
    });
    setAlarms(newAlarms);
  };

  return (
    <>
    <Card>
    <CardContent style={{ textAlign: 'center',backgroundColor: '#FF312E' }}>
<Typography variant="h4" >
 Fire Monitoring
</Typography>
</CardContent>
</Card>
    <Card>
        <CardContent>
   
    <Grid container spacing={2}>
  
      {alarms.map((alarm) => (
        <Grid item xs={6}>
          <Typography variant="h4">{alarm.location}</Typography>
          <Alert
            style={{ marginBottom: 10 }}
            severity={alarm.status === "Active" ? "error" : "info"}
            title={alarm.location}
          >
            {alarm.status}
          </Alert>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleToggleAlarm(alarm.id)}
          >
            Toggle
          </Button>
        </Grid>
      ))}
      
    </Grid>
    </CardContent>
      </Card>
    </>
  );
};

export default FireAlarmMonitoringSystem;
