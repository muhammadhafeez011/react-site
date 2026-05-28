import React from "react";

function PostCard({ post, onLike }) {
  console.log("Rendered:", post.title);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{post.title}</h2>

      <p>{post.caption}</p>

      <button onClick={() => onLike(post.id)}>Like</button>
    </div>
  );
}

export default React.memo(PostCard);
