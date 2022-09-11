import React, { useEffect, useRef, useState } from "react";

type UseHoverType<T extends HTMLButtonElement> = [
  React.LegacyRef<T> | undefined,
  boolean
];

function useHover<T extends HTMLButtonElement>(): UseHoverType<T> {
  const [value, setValue] = useState(false);

  const ref = useRef<T>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
      return;
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

export default useHover;
