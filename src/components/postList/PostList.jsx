import React from 'react';
import './PostList.css';

const PostList = ({ posts, selectedPost, onSelectPost }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <article
          key={post.id}
          className={`post-card ${selectedPost?.id === post.id ? 'selected' : ''}`}
          onClick={() => onSelectPost(post)}
        >
          <h3 className="post-title">{post.title}</h3>
          <p className="post-author">By {post.user?.name}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;