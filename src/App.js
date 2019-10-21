import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';
import { UserProvider } from './UserContext';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UserProvider value={{ users, setUsers }}>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className="col-4 h-100">
            <Container className="h-100">
              <Row className="justify-content-center align-items-center h-100">
                <Col className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <Form />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="col-8">
            <Table />
          </Col>
        </Row>
      </Container>
    </UserProvider>
  );
}

export default App;
