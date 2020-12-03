import {
  buttonBlue,
  darkgrey,
  orange,
  red,
  scum,
} from "lbn-core/dist/assets/colors";
import { Faction } from "../types";

export const colorForFaction = (faction: Faction) => {
  switch (faction) {
    case "First Order":
      return darkgrey;
    case "Galactic Empire":
      return darkgrey;
    case "Galactic Republic":
      return red;
    case "Rebel Alliance":
      return red;
    case "Resistance":
      return orange;
    case "Scum and Villainy":
      return scum;
    case "Separatist Alliance":
      return buttonBlue;
  }
};
