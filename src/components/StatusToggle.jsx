import { useState } from "react";
import ComponentA from "./ComponentA.jsx";
import ComponentB from "./ComponentB.jsx";

export default function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      <div style={{ marginTop: "20px" }}>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}
