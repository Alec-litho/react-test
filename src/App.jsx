import { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/postList/PostList";
import PostDetail from "./components/postDetails/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes, commentsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/comments"),
        ]);

        const [posts, users, comments] = await Promise.all([postsRes.json(), usersRes.json(), commentsRes.json()]);

        const postsWithData = posts.map((post) => ({
          ...post,
          user: users.find((user) => user.id === post.userId),
          comments: comments.filter((comment) => comment.postId === post.id),
        }));

        setPosts(postsWithData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Blog Posts</h1>
      </header>
      <main className="app-main">
        <PostList posts={posts} selectedPost={selectedPost} onSelectPost={setSelectedPost} />
        {selectedPost && <PostDetail post={selectedPost} />}
      </main>
    </div>
  );
}

export default App;
