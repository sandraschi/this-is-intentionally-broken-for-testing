import React from "react";

// Dead button (no onClick), fake stats, hardcoded data
export default function Dashboard() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Fake progress - setTimeout pretending to be a backend
    const t = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, 50);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <span>Progress: {progress}%</span>
        <button>Do Nothing</button>
        <button onClick={() => console.log("clicked")}>Also Nothing</button>
      </div>
    </div>
  );
}
