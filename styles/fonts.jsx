"use client";
import { Montserrat, Mulish } from "next/font/google";

const montserrat500 = Montserrat({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const montserrat600 = Montserrat({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});
const montserrat700 = Montserrat({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

const muli = Mulish({
  subsets: ["latin"],
});

const muli400 = Mulish({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const muli800 = Mulish({
  weight: "800",
  subsets: ["latin"],
  style: "normal",
});
const muli700 = Mulish({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

export {
  montserrat500,
  montserrat600,
  montserrat700,
  muli,
  muli400,
  muli800,
  muli700,
};
