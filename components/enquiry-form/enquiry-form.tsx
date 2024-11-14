'use client';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const EnquiryForm = () => {
  return (
    <Row className='my-5 align-center'>
      <Col xs={11} md={10} lg={8}>
        <Card className='p-4'>
          <Form 
            action="https://formspree.io/f/mzzbrpjj"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="EnquiryForm.group1">
              <Form.Label>Név</Form.Label>
              <Form.Control type="text" name="name" placeholder="Kis Mészáros" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="EnquiryForm.group2">
              <Form.Label>Mobilszám</Form.Label>
              <Form.Control type="text" name="mobile" placeholder="+36123456789" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="EnquiryForm.group3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="kis.meszaros@mail.hu" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="EnquiryForm.group4">
              <Form.Label>Játék részletei nagyjából (rendszer, hány fő, stb.)</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} />
            </Form.Group>
            <Button type="submit">Elküldés</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};


