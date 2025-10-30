const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const dessertBackgroundGradientMap = {
  cheesecake:
    getCSSVar("--gradient-chocolate") +
    ",url('/assets/images/home/dessert-bg.png') center center / cover no-repeat",
  icecream:
    getCSSVar("--gradient-honey-glow") +
    ",url('/assets/images/home/dessert-icecream.png') center center / cover no-repeat",
  "veg-salad":
    getCSSVar("--gradient-garden-glow") +
    ",url('/assets/images/home/dessert-veg-salad.png') center center / cover no-repeat",
};
