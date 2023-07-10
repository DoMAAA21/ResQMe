import React from 'react';
import { Paper, Typography, styled } from '@mui/material';

const MessageContainer = styled(Paper)(({ theme, isRecipient }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  backgroundColor: isRecipient ? '#e8eaf6' : 'inherit',
  marginLeft: isRecipient ? 'auto' : 0,
  marginRight: isRecipient ? 0 : 'auto',
}));

const ChatMessage = ({ message, isRecipient }) => {
  return (
    <MessageContainer isRecipient={isRecipient}>
      <Typography variant="body1">{message}</Typography>
    </MessageContainer>
  );
};

export default ChatMessage;
