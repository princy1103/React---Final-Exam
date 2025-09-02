import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, updatePost } from '../store/posts/thunks';
import { useState } from 'react';

export default function PostDetails({ post }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((s) => s.auth);
  const isOwner = isAuthenticated && user && String(user.id) === String(post.userId);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  const handleDelete = () => {
    if (!isOwner) return;
    dispatch(deletePost(post.id));
  };

  const handleUpdate = async () => {
    if (!isOwner) return;
    await dispatch(updatePost(post.id, { ...post, title, description }));
    setIsEditing(false);
  };

  return (
    <Card className="h-100 shadow-sm post-card">
      {post.image && (
        <Card.Img variant="top" src={post.image} alt={post.title} className="post-card-image" />
      )}
      <Card.Body>
        {isEditing ? (
          <>
            <input className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="form-control mb-2" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button size="sm" className="me-2" onClick={handleUpdate}>Save</Button>
            <Button size="sm" variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Card.Title className="post-card-title">{post.title}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">{new Date(post.date).toLocaleDateString()} • {post.category}</Card.Subtitle>
            <Card.Text className="post-card-excerpt">{post.description}</Card.Text>
            {isOwner && (
              <>
                <Button size="sm" className="me-2" onClick={() => setIsEditing(true)}>Edit</Button>
                <Button size="sm" variant="danger" onClick={handleDelete}>Delete</Button>
              </>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}


