// states/atom.js
import { atom } from "jotai";

export const selectedFeaturesAtom = atom({
  Motor: { Details: null, Amount: 0 },
  Color: { Colors: {}, index: -1, Name: null },
  Wheels: { Image: null, index: -1, Name: null },
  Interior: { Colors: {}, index: -1, Name: null },
  TowHitch: { Details: null, Amount: 0 },
  AutoPilot: { Details: null, Amount: 0 },
  SelfDrive: { Details: null, Amount: 0 },
});
export const resetSelectedFeatures = () => {
  return {
    Motor: { Details: null, Amount: 0 },
    Color: { Colors: {}, index: -1, Name: null },
    Wheels: { Image: null, index: -1, Name: null },
    Interior: { Colors: {}, index: -1, Name: null },
    TowHitch: { Details: null, Amount: 0 },
    AutoPilot: { Details: null, Amount: 0 },
    SelfDrive: { Details: null, Amount: 0 },
  };
};
export const totalPriceAtom = atom(0);
export const isLoggedInAtom = atom(false);