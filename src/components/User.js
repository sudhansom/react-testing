import React, { useState, useEffect } from "react";

export default function User({ url }) {
  const [user, setUser] = useState(null);

  async function fetchUserData(url) {
    try {
      const response = await fetch(url);

      setUser(await response.json());
    } catch (err) {
      console.log("error occured.", { cause: err });
    }
  }

  useEffect(() => {
    fetchUserData(url);
  }, [url]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.company}</strong>
      <br />
      followers: {user.followers}
    </details>
  );
}
