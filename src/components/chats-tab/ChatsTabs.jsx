import React, { useState, useRef, useEffect } from 'react';
import SubjectDetailsTab from '../subjects/SubjectDetilesTab';
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ChatsTabs = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'John', message: 'Hello there!', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', message: 'Hi John! How are you?', timestamp: '10:05 AM' },
    { id: 3, sender: 'John', message: 'I am doing well, thanks!', timestamp: '10:10 AM' },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newChatMessage = {
        id: chatMessages.length + 1,
        sender: 'You',
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

  const containerHeight = window.innerHeight - 180; //
  return (
    <div className="d-flex flex-column h-100">
      <SubjectDetailsTab />
      <Container className="  flex-grow position-relative mt-4 border-0" >
        {/* Chat messages */}
        <PerfectScrollbar
          containerRef={(ref) => (chatContainerRef.current = ref)}
          style={{ maxHeight: containerHeight }}
        >
          <div className="mb-3 border rounded p-3 d-flex flex-column-reverse" style={{ maxHeight: containerHeight }}>
            {chatMessages.slice().reverse().map((message) => (
              <div
                key={message.id}
                className={`mb-3 p-2 rounded ${message.sender === 'You'
                    ? 'bg-primary text-white align-self-end'
                    : 'bg-secondary text-white align-self-start'
                  }`}
                style={{ width: '50%' }}
              >
                <div className="mb-2 text-muted">
                  <strong>{message.sender}</strong> ({message.timestamp})
                </div>
                <div>{message.message}</div>
              </div>
            ))}


          </div>
        </PerfectScrollbar>
        {/* Input box for typing messages */}
        <Row className="position-fixed bottom-0 w-50 end-0 p-3">
          <Col>
            <Form onSubmit={handleSendMessage}>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatsTabs;
