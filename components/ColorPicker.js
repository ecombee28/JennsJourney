import { useState, useEffect } from "react";

export default function ColorPicker() {
  var color;
  const colors = [
    "#D448A0",
    "#EA54F6",
    "#D45748",
    "#A941E0",
    "#541D40",
    "#33CBD4",
    "#278287",
    "#D46053",
    "#A03DD4",
    "#463DD4",
    "#33C5D4",
    "#D43399",
    "#943270",
    "#BA3F8D",
    "#E06534",
  ];

  useEffect(() => {
    const pickColor = () => {
      const random = Math.floor(Math.random() * colors.length - 1);
      color = colors[random];
    };

    pickColor();
  }, []);

  return {
    color: color,
  };
}
