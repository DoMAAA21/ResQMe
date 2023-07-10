import React, { useState } from 'react';
import { Typography, Button, Modal, Box,Grid,Card, CardContent} from '@mui/material';

const SafeCheckIn = () => {
  const [isSafe, setIsSafe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckIn = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSafe(true);
    // You can perform additional actions here, such as sending a notification or updating a database.
  };

  const announcement =
    'Attention: A typhoon is affecting the Philippines. Please check in as safe to let your loved ones know that you are okay.';

  return (
    <Grid style={{ height: '14vh', width: '100%' }}>
    <Card>
        <CardContent>
    <div>
      <Typography variant="h4">Safe Check-In</Typography>
      <Typography variant="body1" style={{ margin: '16px 0' }}>
        {announcement}
      </Typography>
      {isSafe ? (
        <Typography variant="body1">You have checked in as safe.</Typography>
      ) : (
        <div>
          <Button variant="contained" onClick={handleCheckIn}>
            Click here to check in as safe
          </Button>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="h2">
                Are you sure you want to check in as safe?
              </Typography>
              <Button variant="contained" onClick={handleCloseModal}>
                Yes
              </Button>
              <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </Box>
          </Modal>
        </div>
      )}
    </div>
    </CardContent>
    </Card>
    </Grid>
  );
};

export default SafeCheckIn;
