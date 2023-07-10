import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

function App() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim() !== '') {
      const newPost = {
        id: Date.now(),
        text: postText,
      };
      setPosts([...posts, newPost]);
      setPostText('');
    }
  };

  const groups = [
    'React Developers',
    'Designers Community',
    'Fitness Enthusiasts',
    'Food Lovers',
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            ResQMe Community
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper sx={{ height: '100vh', padding: '1rem' }}>
           
              <Typography variant="body1" component="div">
                <List>
                  {groups.map((group, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={group} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ height: '100vh' }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="What's on your mind?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              <Button variant="contained" onClick={handlePost}>
                Post
              </Button>
              <List sx={{ marginTop: '1rem' }}>
                {posts.map((post) => (
                  <ListItem key={post.id} disablePadding>
                    <Avatar sx={{ marginRight: '1rem' }}>U</Avatar>
                    <ListItemText primary={post.text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ height: '100vh', padding: '1rem' }}>
            
              <Typography variant="body1" component="div">
                <Typography variant="h6" component="div">
                  Groups
                </Typography>
                <List>
                  {groups.map((group, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={group} />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ marginY: '1rem' }} />
                <Typography variant="h6" component="div">
                  Ads
                </Typography>
                <Typography variant="body2" component="div">
                  Advertisements here
                </Typography>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
