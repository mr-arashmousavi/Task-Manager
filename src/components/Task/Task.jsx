/** @format */

import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Task = ({ name, Delete, Chenged }) => {
  return (
    <div>
      <Accordion variant="light" defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            style={{ backgroundColor: '#e3e3e3' }}
          >
            <h1>{name}</h1>
          </Accordion.Toggle>
          <Accordion.Collapse
            variant="info"
            style={{ backgroundColor: '#e3e' }}
            eventKey="0"
          >
            <Card.Body variant="info">
              <Form>
                <Button
                  variant="danger"
                  onClick={Delete}
                  ClassName="fa fa-trash"
                >
                  حذف
                </Button>
                <Form.Control
                  type="text"
                  placeholder={name}
                  onChange={Chenged}
                />
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Task;
