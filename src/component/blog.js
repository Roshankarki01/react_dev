
import React from 'react';

const Blog = () => {
  const post = {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post. It is simple and straightforward.'
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <p style={styles.content}>{post.content}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  content: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
};

export default Blog;
