import React, { useState, useEffect } from "react";
import axios from "axios";

const AllAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:2110/agent/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div>
      <h2>All Agents</h2>
      {agents.map((agent) => (
        <div key={agent._id}>
          <h3>{agent.nomAgent}</h3>
          <p>Description: {agent.descriptionAgent}</p>
          <img src={agent.imageAgent} alt={`Image of ${agent.nomAgent}`} />
          <p>
            Abilities:{" "}
            {Array.isArray(agent.abilite)
              ? agent.abilite.map((ability) => ability.name).join(", ")
              : "No abilities"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllAgents;
