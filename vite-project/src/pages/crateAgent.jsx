import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateAgent = () => {
  const [nomAgent, setNomAgent] = useState("");
  const [descriptionAgent, setDescriptionAgent] = useState("");
  const [abilite, setAbilite] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [imageAgent, setImageAgent] = useState("");

  useEffect(() => {
    // Fetch abilities when the component mounts
    const fetchAbilities = async () => {
      try {
        const response = await axios.get("http://localhost:2110/ability/all");
        setAbilities(response.data);
      } catch (error) {
        console.error("Error fetching abilities:", error);
      }
    };

    fetchAbilities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:2110/agent/createagent",
        {
          nomAgent,
          descriptionAgent,
          abilite,
          imageAgent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // Handle agent creation success
    } catch (error) {
      console.error("Error creating agent:", error);
      // Handle agent creation failure
    }
  };

  return (
    <div>
      <h2>Create Agent</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom Agent:
          <input
            type="text"
            value={nomAgent}
            onChange={(e) => setNomAgent(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description Agent:
          <input
            type="text"
            value={descriptionAgent}
            onChange={(e) => setDescriptionAgent(e.target.value)}
          />
        </label>
        <br />
        <label>
          Abilite:
          <select value={abilite} onChange={(e) => setAbilite(e.target.value)}>
            <option value="">Select an ability</option>
            {abilities.map((ability) => (
              <option key={ability._id} value={ability._id}>
                {ability.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Image Agent:
          <input
            type="text"
            value={imageAgent}
            onChange={(e) => setImageAgent(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Agent</button>
      </form>
    </div>
  );
};

export default CreateAgent;
