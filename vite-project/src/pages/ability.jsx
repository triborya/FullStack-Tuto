import React, { useState } from "react";

const CreateAbility = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [typeability, setTypeAbility] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:2110/ability/createability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            typeability,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      // Handle ability creation success
    } catch (error) {
      console.error("Error creating ability:", error);
      // Handle ability creation failure
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type Ability"
        value={typeability}
        onChange={(e) => setTypeAbility(e.target.value)}
      />
      <button type="submit">Create Ability</button>
    </form>
  );
};

export default CreateAbility;
