import React, { useState } from 'react';
import { TextField, Button, Grid, Avatar, styled, Typography , Card, CardContent, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import ChatMessage from './chatMessage';

const MessageContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const AvatarContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));

const RecipientName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
}));

const SendMessageButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const ChatMessenger = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setNewMessage('');

      // Check if the message is a greeting
      const lowerCaseMessage = newMessage.toLowerCase();
      if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        const response = `Hi there! How can I assist you?`;
        const updatedMessagesWithResponse = [...updatedMessages, response];
        setMessages(updatedMessagesWithResponse);
      }
    }
  };

  return (
    <Card>
        <CardContent>
    <div>
    <Box display="flex" justifyContent="flex-end">
        <Icon icon="ic:baseline-call" style={{fontSize: '30px'}}/>
        <Icon icon="wpf:videocall" style={{fontSize: '30px'}} />
      </Box>
        
      <Grid container spacing={2}>
        <MessageContainer item xs={12} alignItems="flex-start">
          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
          <Grid item xs={10}>
            <RecipientName variant="subtitle1">Jon Albert</RecipientName>
          </Grid>
        </MessageContainer>
        <MessageContainer item xs={12}>
        {messages.map((message, index) => (
     <ChatMessage key={index} message={message} isRecipient={index % 2 === 0} />
))}
        </MessageContainer>
        <Grid item xs={10}>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <SendMessageButton variant="contained" color="primary" onClick={handleSendMessage}>
          <Icon icon="material-symbols:send" />
          </SendMessageButton>
        </Grid>
      </Grid>
    </div>
    </CardContent>
    </Card>
    
  );
};

export default ChatMessenger;
