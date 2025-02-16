import React from "react";

const UserPage = () => {
  fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      // refreshToken: '/* YOUR_REFRESH_TOKEN_HERE */', // Optional, if not provided, the server will use the cookie
      expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  })
    .then((res) => res.json())
    .then(console.log);

  /* providing access token in bearer */
  fetch("https://dummyjson.com/auth/users/", {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      // Authorization: "Bearer /* YOUR_ACCESS_TOKEN_HERE */",
      // "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then(console.log);

  return <div>single user</div>;
};

export default UserPage;
