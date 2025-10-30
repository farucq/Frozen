const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// !Header
export const headerBackgroundMap = {
  cheesecake: getCSSVar("--light-brown"),
  icecream: getCSSVar("--vanilla-glow"),
  "veg-salad": getCSSVar("--sage-mist"),
};

// !Common
export const gradientMap = {
  cheesecake: getCSSVar("--gradient-light-orange"),
  icecream: getCSSVar("--gradient-golden-mango"),
  "veg-salad": getCSSVar("--gradient-harvest-meadow"),
};

export const hoverButtonColorMap = {
  cheesecake: getCSSVar("--earthy-brown"),
  icecream: getCSSVar("--golden-honey"),
  "veg-salad": getCSSVar("--fresh-basil"),
};

export const buttonColorMap = {
  cheesecake: getCSSVar("--chocolate"),
  icecream: getCSSVar("--spiced-orange"),
  "veg-salad": getCSSVar("--forest-depth"),
};

// !Footer
export const footerBackgroundGradientMap = {
  cheesecake:
    getCSSVar("--gradient-cinnamon-blush") +
    ",url('/assets/images/footer-bg.png') center center / cover no-repeat",
  icecream:
    getCSSVar("--gradient-chocolate") +
    ",url('/assets/images/footer-icecream.png') center center / cover no-repeat",
  "veg-salad":
    getCSSVar("--gradient-spring-harvest") +
    ",url('/assets/images/home/dessert-veg-salad.png') center center / cover no-repeat",
};
