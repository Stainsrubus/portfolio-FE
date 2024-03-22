// import React from "react";
// import sun from "./resource/brightness.png";
// import moon from "./resource/night-mode.png";

// function ToggleButton({onToggle}) {

//   return <>
//    { onToggle ? (<img src={sun} alt="" onClick={onToggle} className="h-8 w-8 px-3" />): (<img src={moon} alt="" onClick={onToggle} className="h-8 w-8 px-3" />)}
//     </>
// }

// export default ToggleButton;
import React from "react";
import sun from "./resource/brightness.png";
import moon from "./resource/night-mode.png";

function ToggleButton({ theme, onToggle }) {
  return (
      <img
        src={theme === "dark" ? sun : moon}
        alt={theme === "dark" ? "Sun" : "Moon"}
        className="h-8 w-8 px-3"
        onClick={onToggle}
      />
  );
}

export default ToggleButton;
