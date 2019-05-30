import React, { useState, useContext } from "react";
import Avatar from "./Avatar";

// ThemeContext is created with default value "null"
const ThemeContext = React.createContext(null);
// it returns two components Provider and Consumer

const aryColors = ["red", "green", "blue", "gray", "rebeccapurple"];
let colorVal = 0;
function App() {
  const [color, colorSet] = useState(aryColors[colorVal]);

  const nextColor = () => {
    colorVal++;
    if (colorVal > 4) colorVal = 0;
    colorSet(aryColors[colorVal]);
  };

  return (
    <div>
      <button onClick={nextColor}>Next Color</button>
      {/* the Provider wraps the using component by passing the value "dark" */}
      <OuterComponent>
        <p>I'm the Outer component</p>
        {/* This wraps the component needing the Context items */}
        <ThemeContext.Provider value={color}>
          <OurContextComponent>
            <p>I'm using the Context via useContext()</p>
          </OurContextComponent>
        </ThemeContext.Provider>{" "}
        {/* end of wrapped Component */}
      </OuterComponent>
    </div>
  );
}

// This is the inner (or 'deeper' component)
function OurContextComponent(props) {
  const theme = useContext(ThemeContext); // theme will hold our background color

  return (
    <div style={{ backgroundColor: theme, color: "#ddd", padding: "1em" }}>
      {props.children}
      <p>"theme" value received is &lt;{theme}&gt;</p>
      <Avatar dat={theme} />
    </div>
  );
}

function OuterComponent(props) {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: "#000", color: "#0dd", padding: "1em" }}>
      {props.children}
      <p>
        Even though I called useContext() using the same code as the inner component, I won't see it because I'm not
        wrapped in the Context.provider. Look: "theme" value received is &lt;{theme}
        &gt;
      </p>
    </div>
  );
}

export default App;
