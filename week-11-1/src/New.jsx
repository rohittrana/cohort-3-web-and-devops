import { useEffect, useState } from "react";

function New() {
  const [posts, setPosts] = useState([]); // ✅ Initialize as an empty array
  const [post, setPost] = useState({});

  // Fetch post comments
  async function getoPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const json = await response.json();
    setPosts(json); // ✅ Store the array correctly
  }

  // Fetch post details
  async function getPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getoPost();
    getPost();
  }, []);

  return (
    <div>
      <h1>Post Title: {post.title}</h1>
      <h2>Comments:</h2>
      <ul>
        {posts.map((comment) => (
          <li key={comment.id}>{comment.body}</li> // ✅ Correct way to map comments
        ))}
      </ul>
    </div>
  );
}

export default New;
