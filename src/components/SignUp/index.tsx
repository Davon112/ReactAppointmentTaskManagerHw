import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ firstName, lastName, email, password });
  };

  return (
    <Container style={{ maxWidth: '23rem' }} className="mx-auto my-5">
      <Card className="mt-2 mb-4">
        <Card.Body className="rounded-top bg-dark text-white">
          <h3 className="font-weight-bold text-center text-uppercase my-4">Sign up</h3>
          <Form onSubmit={handleSubmit} className="pb-5 px-2">
            <Form.Group className="mb-4 d-flex align-items-center">
              <i className="far fa-user fa-lg me-3"></i>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center">
              <i className="far fa-hand-point-right fa-lg me-3"></i>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center">
              <i className="far fa-envelope fa-lg me-3"></i>
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="pb-3 d-flex align-items-center">
              <i className="far fa-star fa-lg me-3"></i>
              <div className="w-100">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-white">At least 8 characters and 1 digit</Form.Text>
                <Button className="btn-rounded btn-block my-4 z-depth-0" type="submit">
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card className="mb-0 z-depth-0">
          <Card.Body>
            <Form className="text-center">
              <p>or sign up with:</p>
              <i className="fab fa-lg fa-facebook-f pink-accent-text px-2"></i>
              <i className="fab fa-lg fa-linkedin-in pink-accent-text px-2"></i>
              <hr />
              <p>
                By clicking <em>Submit</em> you agree to our
                <a className="pink-accent-text" href="#!" target="_blank">
                  {' '}
                  terms of service
                </a>{' '}
                and
                <a className="pink-accent-text" href="#!" target="_blank">
                  {' '}
                  privacy policy
                </a>
                .
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default SignUpForm;
