import React from "react";

function useHover() {
  const [hovered, setHovered] = React.useState(false);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }
}

export default useHover;
