import React from "react";
function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          width: "300px",
          borderRadius: "10px",
        }}
      >
        <h2>Muhammad Hafeez</h2>

        <p>Email: hafeez@example.com</p>

        <p>Role: Student</p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
