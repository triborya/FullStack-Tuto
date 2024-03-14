import React, { useEffect, useState } from "react";

const AbilityList = ({ onSelectAbility }) => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await fetch("http://localhost:2110/ability/all");
        const data = await response.json();
        setAbilities(data);
      } catch (error) {
        console.error("Error fetching abilities:", error);
      }
    };

    fetchAbilities();
  }, []);

  return (
    <div>
      <h2>Abilities</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability._id}>
            <label>
              <input
                type="checkbox"
                value={ability._id}
                onChange={() => onSelectAbility(ability._id)}
              />
              {ability.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbilityList;
