import { v4 as uuid } from "uuid";
import {
  Faction,
  Format,
  Slot,
  SquadronXWS,
  Upgrade,
  UpgradeXWS,
} from "../types";

export const RESET_LOADED_SQUADRONS: "RESET_LOADED_SQUADRONS" =
  "RESET_LOADED_SQUADRONS";
export const UPDATE_LOADED_SQUADRON: "UPDATE_LOADED_SQUADRON" =
  "UPDATE_LOADED_SQUADRON";
export const REMOVE_LOADED_SQUADRON: "REMOVE_LOADED_SQUADRON" =
  "REMOVE_LOADED_SQUADRON";

export type ResetLoadedSquadronsAction = {
  type: typeof RESET_LOADED_SQUADRONS;
};

export type UpdateLoadedSquadronAction = {
  type: typeof UPDATE_LOADED_SQUADRON;
  squadronXws: SquadronXWS[];
};

export type RemoveLoadedSquadronAction = {
  type: typeof REMOVE_LOADED_SQUADRON;
  squadronUid: string;
};

export const IMPORT_SQUADRON: "IMPORT_SQUADRON" = "IMPORT_SQUADRON";
export const ADD_SQUADRON: "ADD_SQUADRON" = "ADD_SQUADRON";
export const REMOVE_SQUADRON: "REMOVE_SQUADRON" = "REMOVE_SQUADRON";
export const RENAME_SQUADRON: "RENAME_SQUADRON" = "RENAME_SQUADRON";
export const COPY_SQUADRON: "COPY_SQUADRON" = "COPY_SQUADRON";

export const TOGGLE_FORMAT_SQUADRON: "TOGGLE_FORMAT_SQUADRON" =
  "TOGGLE_FORMAT_SQUADRON";

export const INCREASE_SQUADRON_WINS: "INCREASE_SQUADRON_WINS" =
  "INCREASE_SQUADRON_WINS";
export const DECREASE_SQUADRON_WINS: "DECREASE_SQUADRON_WINS" =
  "DECREASE_SQUADRON_WINS";
export const INCREASE_SQUADRON_LOSSES: "INCREASE_SQUADRON_LOSSES" =
  "INCREASE_SQUADRON_LOSSES";
export const DECREASE_SQUADRON_LOSSES: "DECREASE_SQUADRON_LOSSES" =
  "DECREASE_SQUADRON_LOSSES";
export const SET_SQUADRON_TAGS: "SET_SQUADRON_TAGS" = "SET_SQUADRON_TAGS";

export const ADD_SHIP: "ADD_SHIP" = "ADD_SHIP";
export const COPY_SHIP: "COPY_SHIP" = "COPY_SHIP";
export const REMOVE_SHIP: "REMOVE_SHIP" = "REMOVE_SHIP";
export const CHANGE_PILOT: "CHANGE_PILOT" = "CHANGE_PILOT";
export const SET_UPGRADE: "SET_UPGRADE" = "SET_UPGRADE";

export type SyncSquadsAction = {
  type: "SYNC_SQUADS";
};

/*
  Squadron Actions
*/

export type AddSquadronAction = {
  type: typeof ADD_SQUADRON;
  uid: string;
  faction: Faction;
  format: Format;
};

export type ImportSquadronAction = {
  type: typeof IMPORT_SQUADRON;
  squadron: SquadronXWS;
};

export type RenameSquadronAction = {
  type: typeof RENAME_SQUADRON;
  squadronUid: string;
  name: string;
};

export type CopySquadronAction = {
  type: typeof COPY_SQUADRON;
  squadronUid: string;
};

export type ToggleFormatSquadronAction = {
  type: typeof TOGGLE_FORMAT_SQUADRON;
  squadronUid: string;
};

export type RemoveSquadronAction = {
  type: typeof REMOVE_SQUADRON;
  squadronUid: string;
};

/*
  Wins / Losses
*/

export type IncreaseSquadronWinsAction = {
  type: typeof INCREASE_SQUADRON_WINS;
  squadronUid: string;
};

export type DecreaseSquadronWinsAction = {
  type: typeof DECREASE_SQUADRON_WINS;
  squadronUid: string;
};

export type IncreaseSquadronLossAction = {
  type: typeof INCREASE_SQUADRON_LOSSES;
  squadronUid: string;
};

export type DecreaseSquadronLossAction = {
  type: typeof DECREASE_SQUADRON_LOSSES;
  squadronUid: string;
};

export type SetSquadronTagsAction = {
  type: typeof SET_SQUADRON_TAGS;
  squadronUid: string;
  tags: string[];
};

/*
  Unit Actions
*/

export type AddShipAction = {
  type: typeof ADD_SHIP;
  squadronUid: string;
  shipXws: string;
  pilotXws: string;
  upgrades?: UpgradeXWS;
};

export type CopyShipAction = {
  type: typeof COPY_SHIP;
  squadronUid: string;
  unitUid: string;
};

export type RemoveShipAction = {
  type: typeof REMOVE_SHIP;
  squadronUid: string;
  unitUid: string;
};

export type ChangePilotAction = {
  type: typeof CHANGE_PILOT;
  squadronUid: string;
  shipUid: string;
  pilotXws: string;
  hasTalent: boolean;
  hasForce: boolean;
};

/*
  Upgrade Actions
*/

export type SetUpgradeAction = {
  type: typeof SET_UPGRADE;
  squadronUid: string;
  unitUid: string;
  slot: Slot;
  slotIndex: number;
  upgrade?: Upgrade;
};

export type Action =
  | ResetLoadedSquadronsAction
  | UpdateLoadedSquadronAction
  | RemoveLoadedSquadronAction
  | SyncSquadsAction
  | AddSquadronAction
  | ImportSquadronAction
  | RenameSquadronAction
  | CopySquadronAction
  | IncreaseSquadronWinsAction
  | DecreaseSquadronWinsAction
  | IncreaseSquadronLossAction
  | DecreaseSquadronLossAction
  | SetSquadronTagsAction
  | ToggleFormatSquadronAction
  | RemoveSquadronAction
  | AddShipAction
  | CopyShipAction
  | RemoveShipAction
  | ChangePilotAction
  | SetUpgradeAction;

export const addSquadron = (
  faction: Faction,
  format: Format,
  uid?: string
): AddSquadronAction => ({
  type: ADD_SQUADRON,
  uid: uid || uuid(),
  faction,
  format,
});

export const importSquadron = (
  squadron: SquadronXWS
): ImportSquadronAction => ({
  type: IMPORT_SQUADRON,
  squadron,
});

export const renameSquadron = (
  squadronUid: string,
  name: string
): RenameSquadronAction => ({
  type: RENAME_SQUADRON,
  squadronUid,
  name,
});

export const copySquadron = (squadronUid: string): CopySquadronAction => ({
  type: COPY_SQUADRON,
  squadronUid,
});

export const copyShip = (
  squadronUid: string,
  unitUid: string
): CopyShipAction => ({
  type: COPY_SHIP,
  squadronUid,
  unitUid,
});

export const removeShip = (
  squadronUid: string,
  unitUid: string
): RemoveShipAction => ({
  type: REMOVE_SHIP,
  squadronUid,
  unitUid,
});

export const setUpgrade = (
  squadronUid: string,
  unitUid: string,
  slot: Slot,
  slotIndex: number,
  upgrade?: Upgrade
): SetUpgradeAction => ({
  type: SET_UPGRADE,
  squadronUid,
  unitUid,
  slot,
  slotIndex,
  upgrade,
});

export const toggleFormat = (
  squadronUid: string
): ToggleFormatSquadronAction => ({
  type: TOGGLE_FORMAT_SQUADRON,
  squadronUid,
});

export const removeSquadron = (squadronUid: string): RemoveSquadronAction => ({
  type: REMOVE_SQUADRON,
  squadronUid,
});

export const increaseWins = (
  squadronUid: string
): IncreaseSquadronWinsAction => ({
  type: INCREASE_SQUADRON_WINS,
  squadronUid,
});

export const decreaseWins = (
  squadronUid: string
): DecreaseSquadronWinsAction => ({
  type: DECREASE_SQUADRON_WINS,
  squadronUid,
});

export const increaseLosses = (
  squadronUid: string
): IncreaseSquadronLossAction => ({
  type: INCREASE_SQUADRON_LOSSES,
  squadronUid,
});

export const decreaseLosses = (
  squadronUid: string
): DecreaseSquadronLossAction => ({
  type: DECREASE_SQUADRON_LOSSES,
  squadronUid,
});

export const setSquadronTagsAction = (
  squadronUid: string,
  tags: string[]
): SetSquadronTagsAction => ({
  type: SET_SQUADRON_TAGS,
  squadronUid,
  tags,
});

export const addShipAction = (
  squadronUid: string,
  shipXws: string,
  pilotXws: string,
  upgrades?: UpgradeXWS
): AddShipAction => ({
  type: ADD_SHIP,
  squadronUid,
  shipXws,
  pilotXws,
  upgrades,
});

export const changePilotAction = (
  squadronUid: string,
  shipUid: string,
  pilotXws: string,
  hasForce: boolean,
  hasTalent: boolean
): ChangePilotAction => ({
  type: CHANGE_PILOT,
  squadronUid,
  shipUid,
  pilotXws,
  hasForce,
  hasTalent,
});

export default {};
