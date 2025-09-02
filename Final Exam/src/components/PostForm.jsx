import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/posts/thunks';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((s) => s.auth);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('general');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required');
      return;
    }
    if (!isAuthenticated) {
      setError('You must sign in to add a post');
      return;
    }
    const post = { title, description, image, category, date: new Date().toISOString(), likes: 0 };
    await dispatch(addPost(post));
    navigate('/');
  };

  return (
    <div className="container">
      <Card className="p-4">
        <h3 className="mb-3">Create New Post</h3>
        {error && <div className="text-danger mb-2">{error}</div>}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control value={image} onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="general">general</option>
              <option value="tech">tech</option>
              <option value="life">life</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Add Post</Button>
        </Form>
      </Card>
    </div>
  );
}


