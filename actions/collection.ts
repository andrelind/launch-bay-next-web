export const SET_COLLECTION: 'SET_COLLECTION' = 'SET_COLLECTION';
export const INCREASE_SOURCE_EXPANSION: 'INCREASE_SOURCE_EXPANSION' =
  'INCREASE_SOURCE_EXPANSION';
export const DECREASE_SOURCE_EXPANSION: 'DECREASE_SOURCE_EXPANSION' =
  'DECREASE_SOURCE_EXPANSION';
export const INCREASE_ADDITIONAL_PILOT: 'INCREASE_ADDITIONAL_PILOT' =
  'INCREASE_ADDITIONAL_PILOT';
export const DECREASE_ADDITIONAL_PILOT: 'DECREASE_ADDITIONAL_PILOT' =
  'DECREASE_ADDITIONAL_PILOT';
export const INCREASE_ADDITIONAL_SHIP: 'INCREASE_ADDITIONAL_SHIP' =
  'INCREASE_ADDITIONAL_SHIP';
export const DECREASE_ADDITIONAL_SHIP: 'DECREASE_ADDITIONAL_SHIP' =
  'DECREASE_ADDITIONAL_SHIP';
export const INCREASE_ADDITIONAL_UPGRADE: 'INCREASE_ADDITIONAL_UPGRADE' =
  'INCREASE_ADDITIONAL_UPGRADE';
export const DECREASE_ADDITIONAL_UPGRADE: 'DECREASE_ADDITIONAL_UPGRADE' =
  'DECREASE_ADDITIONAL_UPGRADE';

export type SetCollection = {
  type: typeof SET_COLLECTION;
  collection: any;
  timestamp: string;
};

export type IncreaseSourceExpansion = {
  type: typeof INCREASE_SOURCE_EXPANSION;
  xws: string;
};

export type DecreaseSourceExpansion = {
  type: typeof DECREASE_SOURCE_EXPANSION;
  xws: string;
};

export type IncreaseAdditionalPilot = {
  type: typeof INCREASE_ADDITIONAL_PILOT;
  xws: string;
};

export type DecreaseAdditionalPilot = {
  type: typeof DECREASE_ADDITIONAL_PILOT;
  xws: string;
};
export type IncreaseAdditionalShip = {
  type: typeof INCREASE_ADDITIONAL_SHIP;
  xws: string;
};

export type DecreaseAdditionalShip = {
  type: typeof DECREASE_ADDITIONAL_SHIP;
  xws: string;
};

export type IncreaseAdditionalUpgrade = {
  type: typeof INCREASE_ADDITIONAL_UPGRADE;
  xws: string;
};

export type DecreaseAdditionalUpgrade = {
  type: typeof DECREASE_ADDITIONAL_UPGRADE;
  xws: string;
};

export type Action =
  | SetCollection
  | IncreaseSourceExpansion
  | DecreaseSourceExpansion
  | IncreaseAdditionalPilot
  | DecreaseAdditionalPilot
  | IncreaseAdditionalShip
  | DecreaseAdditionalShip
  | IncreaseAdditionalUpgrade
  | DecreaseAdditionalUpgrade;

export const setCollection = (collection: any, timestamp: string) => ({
  type: SET_COLLECTION,
  collection,
  timestamp
});

export const increaseSourceExpansion = (
  xws: string
): IncreaseSourceExpansion => ({
  type: INCREASE_SOURCE_EXPANSION,
  xws
});

export const decreaseSourceExpansion = (
  xws: string
): DecreaseSourceExpansion => ({
  type: DECREASE_SOURCE_EXPANSION,
  xws
});

export const increaseAdditionalShip = (
  xws: string
): IncreaseAdditionalShip => ({
  type: INCREASE_ADDITIONAL_SHIP,
  xws
});

export const decreaseAdditionalShip = (
  xws: string
): DecreaseAdditionalShip => ({
  type: DECREASE_ADDITIONAL_SHIP,
  xws
});

export const increaseAdditionalPilot = (
  xws: string
): IncreaseAdditionalPilot => ({
  type: INCREASE_ADDITIONAL_PILOT,
  xws
});

export const decreaseAdditionalPilot = (
  xws: string
): DecreaseAdditionalPilot => ({
  type: DECREASE_ADDITIONAL_PILOT,
  xws
});

export const increaseAdditionalUpgrade = (
  xws: string
): IncreaseAdditionalUpgrade => ({
  type: INCREASE_ADDITIONAL_UPGRADE,
  xws
});

export const decreaseAdditionalUpgrade = (
  xws: string
): DecreaseAdditionalUpgrade => ({
  type: DECREASE_ADDITIONAL_UPGRADE,
  xws
});

export default {
  increaseSourceExpansion,
  decreaseSourceExpansion,
  increaseAdditionalShip,
  decreaseAdditionalShip,
  increaseAdditionalPilot,
  decreaseAdditionalPilot,
  increaseAdditionalUpgrade,
  decreaseAdditionalUpgrade
};
