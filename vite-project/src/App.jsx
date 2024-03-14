import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import CreateAbility from "./pages/ability";
import CreateAgent from "./pages/crateAgent";
import Register from "./pages/register";
import Login from "./pages/login";
import AllAgents from "./pages/agents";
import Logout from "./components/logout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {  
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-ability">Create Ability</Link>
            </li>
            <li>
              <Link to="/create-agent">Create Agent</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/all-agents">All Agents</Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/create-ability"
            element={
              isAuthenticated ? <CreateAbility /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/create-agent"
            element={
              isAuthenticated ? <CreateAgent /> : <Navigate to="/login" />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/all-agents"
            element={isAuthenticated ? <AllAgents /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
