import Arcade from "../../assets/images/icon-arcade.svg";
import Advance from "../../assets/images/icon-advanced.svg";
import Pro from "../../assets/images/icon-pro.svg";

export const data = {
  title: "Select your plan",
  description: "You have the option of mo or yearly billing.",
  state: [
    {
      icon: Arcade,
      name: "arcade",
      price: {
        mo: {
          value: 9,
        },
        yr: {
          value: 90,
          offer: "2 months free",
        },
      },
    },
    {
      icon: Advance,
      name: "advanced",
      price: {
        mo: {
          value: 12,
        },
        yr: {
          value: 120,
          offer: "2 months free",
        },
      },
    },
    {
      icon: Pro,
      name: "pro",
      price: {
        mo: {
          value: 15,
        },
        yr: {
          value: 150,
          offer: "2 months free",
        },
      },
    },
  ],
};
