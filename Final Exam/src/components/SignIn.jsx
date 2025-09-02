import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/auth/actions';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [name, setName] = useState('Alice');
  const [userId, setUserId] = useState('1');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ id: userId, name }));
    navigate('/');
  };

  return (
    <div className="container">
      <Card className="p-4">
        <h3 className="mb-3">Sign In</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control value={userId} onChange={(e) => setUserId(e.target.value)} />
          </Form.Group>
          <Button type="submit">Sign In</Button>
        </Form>
      </Card>
    </div>
  );
}


