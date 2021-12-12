import { observer } from 'mobx-react';
import React from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { useInjection } from '../../ioc/ioc.react';
import ownTypes from '../../ioc/ownTypes';
import LoginStore from '../../stores/LoginStore';

const Login = observer(() => {
  const store = useInjection<LoginStore>(ownTypes.loginStore);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} md={6} xs>
          <Form onSubmit={(ev)=>{ ev.preventDefault();
                                  store.login();
                                }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={store.email}
                onChange={(ev)=> {store.changeEmail(ev.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={store.password}
                onChange={(ev)=> {store.changePassword(ev.target.value)}}
              />
            </Form.Group>
            {!!store.error && (
              <p style={{ color: 'red', fontSize: 14 }}>{store.error}</p>
            )}
            <Button variant="primary" type="submit">
              {store.isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                'Submit'
              )}
            </Button>
            {!!store.token && (
              <p className="mt-3 mb-3" style={{ color: 'green', fontSize: 14, fontWeight: 700 }}>{`Success! Token is: ${store.token}`}</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  )
});

export default Login
