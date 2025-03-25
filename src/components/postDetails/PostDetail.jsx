import React from 'react';
import './PostDetail.css';

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <article className="post-content">
        <h2 className="post-detail-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        
        <div className="author-info">
          <h3 className="section-title">Author Information</h3>
          <p><strong>Name:</strong> {post.user?.name}</p>
          <p><strong>Email:</strong> {post.user?.email}</p>
          <p><strong>Company:</strong> {post.user?.company?.name}</p>
        </div>

        <div className="comments-section">
          <h3 className="section-title">Comments ({post.comments.length})</h3>
          {post.comments.map(comment => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-email">{comment.email}</span>
              </div>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PostDetail;