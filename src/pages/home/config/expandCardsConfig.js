const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const activeExpandCardBackgroundMap = {
  cheesecake: getCSSVar("--peach-glaze"),
  icecream: getCSSVar("--vanilla-glow"),
  "veg-salad": getCSSVar("--lemon-thyme"),
};

export const inActiveExpandCardBackgroundMap = {
  cheesecake: getCSSVar("--burnt-caramel"),
  icecream: getCSSVar("--amber-flame"),
  "veg-salad": getCSSVar("--garden-leaf"),
};
