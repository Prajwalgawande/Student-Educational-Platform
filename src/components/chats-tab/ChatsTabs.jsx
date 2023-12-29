import React, { useState, useRef, useEffect } from 'react';
import SubjectDetailsTab from '../subjects/SubjectDetilesTab';
import { Container, Row, Col, ListGroup,InputGroup,Button, Form } from 'react-bootstrap';

const ChatsTabs = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'John', message: 'Hello there!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Jane', message: 'Hi John! How are you?', timestamp: '10:05 AM' },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newChatMessage = {
        id: chatMessages.length + 1,
        sender: 'You', // For simplicity, assume the user is the sender
        message: newMessage,
        timestamp: timestamp,
      };

      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div className="d-flex flex-column h-100">
      <SubjectDetailsTab />
      <Container className="flex-grow-1 p-4" ref={chatContainerRef}>
        {/* Chat messages */}
        <ListGroup>
          {chatMessages.map((message) => (
            <ListGroup.Item
              key={message.id}
              className={`rounded ${
                message.sender === 'You' ? 'bg-primary text-white' : 'bg-light'
              } mb-2`}
            >
              <strong>{message.sender}</strong> ({message.timestamp}): {message.message}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      {/* Input box for typing messages */}
      <Form className="p-4">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="primary" onClick={handleSendMessage}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default ChatsTabs;
