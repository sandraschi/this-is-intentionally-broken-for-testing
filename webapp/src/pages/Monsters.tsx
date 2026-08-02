import React from "react";

// Missing type for props on purpose
export default function Monsters(props) {
  return (
    <div>
      <h2>Monsters</h2>
      <ul>
        {props.data.map((m: any) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </div>
  );
}
