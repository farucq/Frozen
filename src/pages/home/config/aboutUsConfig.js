const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const aboutImageMap = {
  cheesecake: "/assets/images/home/cake.png",
  icecream: "/assets/images/home/icecream.png",
  "veg-salad": "/assets/images/home/veg-salad.png",
};

export const aboutGradientMap = {
  cheesecake:
    getCSSVar("--gradient-warm-bronze") +
    ",url('/assets/images/home/about-us-bg.png') center center / cover no-repeat",
  icecream:
    getCSSVar("--gradient-honey-glow") +
    ",url('/assets/images/home/about-us-bg.png') center center / cover no-repeat",
  "veg-salad":
    getCSSVar("--gradient-garden-glow") +
    ",url('/assets/images/home/about-us-bg.png') center center / cover no-repeat",
};
