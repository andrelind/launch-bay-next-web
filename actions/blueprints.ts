import { BluePrint, Faction, Ship } from '../types';

export const SAVE_BLUEPRINT = 'SAVE_BLUEPRINT';
export const REMOVE_BLUEPRINT = 'REMOVE_BLUEPRINT';
export const ADD_SYNCED_BLUEPRINT = 'ADD_SYNCED_BLUEPRINT';
export const REMOVE_SYNCED_BLUEPRINT = 'REMOVE_SYNCED_BLUEPRINT';

export type AddBlueprintAction = {
  type: typeof SAVE_BLUEPRINT;
  ship: Ship;
  faction: Faction;
  name?: string;
};

export type RemoveBlueprintAction = {
  type: typeof REMOVE_BLUEPRINT;
  uid: string;
};

export type AddSyncedBlueprintAction = {
  type: typeof ADD_SYNCED_BLUEPRINT;
  blueprint: BluePrint;
};

export type RemoveSyncedBlueprintAction = {
  type: typeof REMOVE_SYNCED_BLUEPRINT;
  uid: string;
};

export type Action =
  | AddBlueprintAction
  | RemoveBlueprintAction
  | AddSyncedBlueprintAction
  | RemoveSyncedBlueprintAction;

export const addBlueprint = (
  ship: Ship,
  faction: Faction,
  name?: string
): AddBlueprintAction => ({
  type: SAVE_BLUEPRINT,
  ship,
  faction,
  name,
});

export const removeBlueprint = (uid: string): RemoveBlueprintAction => ({
  type: REMOVE_BLUEPRINT,
  uid,
});

export default {};
