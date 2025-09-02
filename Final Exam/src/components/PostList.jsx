import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/posts/thunks';
import PostDetails from './PostDetails';
import { Form, Row, Col } from 'react-bootstrap';

export default function PostList() {
  const dispatch = useDispatch();
  const { items, loading, error, sortBy, filters } = useSelector((s) => s.posts);
  const [localSort, setLocalSort] = useState(sortBy);
  const [category, setCategory] = useState(filters.category);
  const [search, setSearch] = useState('');

  useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

  const filteredSorted = useMemo(() => {
    let list = [...items];
    // Search by title (case-insensitive)
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => String(p.title || '').toLowerCase().includes(q));
    }
    if (category !== 'all') list = list.filter((p) => p.category === category);
    // Author filter removed
    if (localSort === 'date_desc') list.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (localSort === 'date_asc') list.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (localSort === 'popularity') list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    return list;
  }, [items, localSort, category, search]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container text-danger">{error}</div>;

  const uniqueCategories = ['all', ...Array.from(new Set(items.map((p) => p.category).filter(Boolean)))];

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="hero-title">My Best Articles to Help You Build a Successful Blog</h1>
        <p className="hero-subtitle">Curated guides and strategies to grow your blog the right way</p>
      </div>

      <Row className="mb-4 g-3 align-items-end">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-semibold mb-1">Search</Form.Label>
            <Form.Control
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search by title"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-semibold mb-1">Sort</Form.Label>
            <Form.Select value={localSort} onChange={(e) => setLocalSort(e.target.value)} aria-label="Sort posts">
              <option value="date_desc">Newest</option>
              <option value="date_asc">Oldest</option>
              <option value="popularity">Popularity</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-semibold mb-1">Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
              {uniqueCategories.map((c) => <option key={c} value={c}>{c}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="post-grid g-4">
        {filteredSorted.map((p) => (
          <Col key={p.id} xs={12} md={6} lg={4}>
            <PostDetails post={p} />
          </Col>
        ))}
      </Row>

      {filteredSorted.length === 0 && <div>No posts</div>}
    </div>
  );
}


