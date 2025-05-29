import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
    setShowProfile(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setShowProfile(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isLoggedIn ? (
        <>
          <h2>Please log in</h2>
          <LoginForm onLogin={handleLogin} />
        </>
      ) : (
        <>
          <h2>Welcome back, {username}!</h2>
          <button onClick={() => setShowProfile(true)}>Profile</button>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      )}

      {showProfile && isLoggedIn && <Profile username={username} />}
    </div>
  );
}
