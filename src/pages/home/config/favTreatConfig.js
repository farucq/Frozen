const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const favTreatCardBackgroundMap = {
  cheesecake: getCSSVar("--peach-frost"),
  icecream: getCSSVar("--vanilla-glow"),
  "veg-salad": getCSSVar("--lemon-thyme"),
};

export const cardTopLeftImgMap = {
  cheesecake: "top-left-blueberry.png",
  icecream: "top-left-slice-mango.png",
  "veg-salad": "top-left-slice-cucumber.png",
};

export const cardTopRightImgMap = {
  cheesecake: "bottom-left-strawberry.png",
  icecream: "top-right-mango.png",
  "veg-salad": "bottom-left-cauliflower.png",
};

export const cardBottomLeftImgMap = {
  cheesecake: "bottom-left-strawberry.png",
  icecream: "bottom-left-mango.png",
  "veg-salad": "top-right-cauliflower.png",
};

export const cardBottomRightImgMap = {
  cheesecake: "top-left-blueberry.png",
  icecream: "bottom-right-slice-mango.png",
  "veg-salad": "top-left-slice-cucumber.png",
};
