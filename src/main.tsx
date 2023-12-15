import React from "react";
import ReactDOM from "react-dom/client";
import { useRef, useEffect } from "react";
import { PeelBack, PeelBottom, PeelTop, PeelWrapper } from ".";

// eslint-disable-next-line react-refresh/only-export-components
function Example() {
  const ref = useRef<any>(null);

  const handleClick = () => {};

  useEffect(() => {
    console.log("Peel", ref.current);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>
        <PeelWrapper
          height={200}
          width={200}
          ref={ref}
          constraints={[{ x: 200, y: 200 }]}
          options={{ corner: "TOP_LEFT" }}
          peelPosition={{ x: 100, y: 100 }}
          drag
        >
          <PeelTop style={{ backgroundColor: "#81afcb" }}></PeelTop>
          <PeelBack style={{ backgroundColor: "#a0c7df" }}></PeelBack>
          <PeelBottom style={{ backgroundColor: "#688394" }}></PeelBottom>
        </PeelWrapper>
      </div>
    </div>
  );
}

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Render your component
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);
