import React from "react";
import { useState, useMemo, useCallback } from "react";

import posts from "../data/posts";

import PostCard from "../components/PostCard";

function Home() {
  const [search, setSearch] = useState("");

  const handleLike = useCallback((id) => {
    console.log("Liked:", id);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Social Feed</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
}

export default Home;
