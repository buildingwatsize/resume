import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ClassCombiner = (...inputs) => {
  return twMerge(clsx(inputs));
};
export const GetRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
