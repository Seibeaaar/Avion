import React from "react";
import { ReactComponent as DeliveryIcon } from "src/assets/icons/Delivery.svg";
import { ReactComponent as PurchaseIcon } from "src/assets/icons/Purchase.svg";
import { ReactComponent as RecycleIcon } from "src/assets/icons/Recycle.svg";
import { ReactComponent as CheckmarkIcon } from "src/assets/icons/Checkmark.svg";

export default [
  {
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
    icon: <DeliveryIcon />,
  },
  {
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
    icon: <CheckmarkIcon />,
  },
  {
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
    icon: <PurchaseIcon />,
  },
  {
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
    icon: <RecycleIcon />,
  },
];
