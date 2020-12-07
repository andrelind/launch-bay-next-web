export const popoverStyle = ({ y }: { x: number; y: number }) => {
  if (process.browser) {
    console.log({
      y,
      w: window.innerHeight,
      cn: y > window.innerHeight * 0.6 ? "bottom-full" : "top-full",
    });
    // First, Y-pos
    if (y > window.innerHeight * 0.6) {
      return { bottom: "100%" };
    } else {
      return { top: "100%" };
    }
  }
  return undefined;
};

export const popoverDetailStyle = ({ x }: { x: number; y: number }) => {
  if (process.browser) {
    // X-Pos
    if (x > window.innerWidth * 0.5) {
      return { top: 0, right: "100%" };
    } else {
      return { top: 0, left: "100%" };
    }
  }
  return undefined;
};
