import { useEffect, useRef } from "react";
import dragula from "dragula";

function useDragula({ containers, options }) {
  const drake = useRef(null);

  useEffect(() => {
    // Initialize Dragula when the component mounts
    drake.current = dragula(containers, options);

    // Clean up the Dragula instance when the component unmounts
    return () => {
      if (drake.current) {
        drake.current.destroy();
      }
    };
  }, [containers, options]);

  return drake.current;
}

export default useDragula;
