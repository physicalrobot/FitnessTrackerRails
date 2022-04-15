import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home'
import SignUp from './SignUp';
import Login from './Login';

function App() {

  const [user, setUser] = useState(null)
  let navigate = useNavigate();

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        // r.text().then(console.log)
      }else{
        navigate("/signup")
      }
    //   .then((r) => r.json())
    // })
    });
  }, []);



  function handleLogout() {
    setUser(null);
    navigate ("/signup")
  }
  

  // function runorder () {
  //   user ? (
  //     <Routes>
  //       <Route exact path="/" element={<Home user={user} setUser={setUser} handleLogout={handleLogout}/>} />
  //     </Routes>
  //   ) : (
  //     <Routes>
  //       <Route exact path="/signup" element={<SignUp user={user} setUser={setUser} handleLogout={handleLogout} />} />

  //       <Route exact path="/login" element={<Login setUser={setUser} user={user} />} />

  //       <Route exact path="/" element={<Home />} />

  //     </Routes>
  //   )
  // }

  return (
    <>
        {  user ? (
      <Routes>
        <Route  path="/" element={<Home user={user} setUser={setUser} handleLogout={handleLogout}/>} />
      </Routes>
    ) : (
      <Routes>
        <Route  path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route  path="/signup" element={<SignUp user={user} setUser={setUser} handleLogout={handleLogout} />} />
      </Routes>
    )}
    </>
  );
}

export default App;