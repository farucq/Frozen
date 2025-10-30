const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const bannerImageMap = {
  cheesecake: "/assets/images/home/banner-cake.png",
  icecream: "/assets/images/home/banner-icecream.png",
  "veg-salad": "/assets/images/home/banner-veg-salad.png",
};

export const bannerLeftImageMap = {
  cheesecake: "/assets/images/home/strawberry-bowl.png",
  icecream: "/assets/images/home/banner-mangos.png",
  "veg-salad": "/assets/images/home/banner-vegetables.png",
};

export const bannerTopLeftImgMap = {
  cheesecake: "top-left-blueberry.png",
  icecream: "top-left-slice-mango.png",
  "veg-salad": "top-left-slice-cucumber.png",
};

export const bannerBottomLeftImgMap = {
  cheesecake: "bottom-left-strawberry.png",
  icecream: "bottom-left-mango.png",
  "veg-salad": "top-right-cauliflower.png",
};

export const bannerTLBBSImageMap = {
  cheesecake: "/assets/images/home/top-left-strawberry.png",
  icecream: "/assets/images/home/bottom-left-mango.png",
  "veg-salad": "/assets/images/home/top-right-cauliflower.png",
};

export const bannerTRBBSImageMap = {
  cheesecake: "/assets/images/home/bottom-left-strawberry.png",
  icecream: "/assets/images/home/top--right--mango.png",
  "veg-salad": "/assets/images/home/top--right--cauliflower.png",
};

export const bannerTBBBSImageMap = {
  cheesecake: "/assets/images/home/strawberry-sliced.png",
  icecream: "/assets/images/home/mangos-group.png",
  "veg-salad": "/assets/images/home/vegetables-group.png",
};

export const bannerFirstCardBackgroundMap = {
  cheesecake: getCSSVar("--chocolate"),
  icecream: getCSSVar("--golden-honey"),
  "veg-salad": getCSSVar("--fresh-basil"),
};

export const bannerSecondCardBackgroundMap = {
  cheesecake: getCSSVar("--earthy-brown"),
  icecream: getCSSVar("--spiced-orange"),
  "veg-salad": getCSSVar("--fresh-basil"),
};

export const bannerThirdCardBackgroundMap = {
  cheesecake: getCSSVar("--earthy-brown"),
  icecream: getCSSVar("--golden-honey"),
  "veg-salad": getCSSVar("--deep-forest"),
};
