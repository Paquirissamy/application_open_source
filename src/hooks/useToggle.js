import { useState } from "react";

export const useToggle = (initial = true) => {
  const [state, setstate] = useState(initial);
  const toogle = () => setstate((prev) => !prev);
  return {
    state,
    toogle,
  };
};
