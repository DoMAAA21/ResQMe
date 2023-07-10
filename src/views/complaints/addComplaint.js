import React from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, Input } from "@mui/material";

const AddComplaint = () => {



    return (



        <>

            <Card>
                <CardContent style={{ textAlign: 'center', backgroundColor: '#09BC8A', height: '10vh' }}>
                    <Typography variant="h4" >
                        New Complaint
                    </Typography>
                </CardContent>
            </Card>


            <Card>
                <CardContent style={{ textAlign: 'center' }}>

                    <TextField

                        select
                        label="Content"
                        name="textarea"
                        required
                        variant="outlined"
                        color="secondary"
                        type="email"

                        sx={{ mb: 3 }}
                        fullWidth


                    />


                    <TextField
                        label="Problem"
                        name="name"
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"

                        sx={{ mb: 3 }}
                        fullWidth
                    />




                    <TextField
                        label="Date"
                        name="date"
                        required
                        variant="outlined"
                        color="secondary"
                        type="password"


                        fullWidth
                        sx={{ mb: 3 }}

                    />

<TextField
      id="date-input"
      label="Date Happened"
      type="date"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }} 
      sx={{ mb: 3 }}
    />

                    
                        <Input
                            type="file"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                      
                    
               





                    {/* <div className="form-group">
              
              <div className="d-flex align-items-center">
                <div>
                  <figure className="w-25 p-3">
                    <img
                      
                      className="rounded-circle"
                      alt="Avatar Preview"
                     
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                  
        
                   required
                  />
                 
                    Choose Avatar
                 
                </div>
              </div>
            </div> */}

                    <Button variant="contained" fullWidth color="secondary" type="submit">Submit</Button>

                </CardContent>
            </Card>
        </>

    )

}

export default AddComplaint