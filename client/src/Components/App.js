import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import SignUp from './SignUp';
import Login from './Login';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  function handleLogout() {
    setUser(null);
  }
  

  return (
    <>
      <main>
        {user ? (
          <Routes>
            <Route exact path="/" element={<Home user={user} setUser={setUser} handleLogout={handleLogout}/>} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/signup" element={<SignUp user={user} setUser={setUser} handleLogout={handleLogout} />} />

            <Route exact path="/login" element={<Login setUser={setUser} user={user} />} />

            <Route exact path="/" element={<Home />} />

          </Routes>
        )}
      </main>
    </>
  );
}

export default App;