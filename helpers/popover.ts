export const popoverClasses = ({ y }: { x: number; y: number }) => {
  if (process.browser) {
    console.log({ y, w: window.innerHeight });
    // First, Y-pos
    if (y > window.innerHeight * 0.6) {
      return "bottom-full";
    } else {
      return "top-full";
    }
  }
  return "";
};

export const popoverDetailClasses = ({ x }: { x: number; y: number }) => {
  if (process.browser) {
    // X-Pos
    if (x > window.innerWidth * 0.5) {
      return `-top-0 right-full`;
    } else {
      return `-top-0 left-full`;
    }
  }
  return "";
};
