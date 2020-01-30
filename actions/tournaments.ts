import uuid from 'uuid/v4';

import { Format, Game, Squadron, Tournament } from '../types';

export const ADD_TOURNAMENT: 'ADD_TOURNAMENT' = 'ADD_TOURNAMENT';
export const REMOVE_TOURNAMENT: 'REMOVE_TOURNAMENT' = 'REMOVE_TOURNAMENT';
export const ADD_SYNCED_TOURNAMENT: 'ADD_SYNCED_TOURNAMENT' =
  'ADD_SYNCED_TOURNAMENT';
export const REMOVE_SYNCED_TOURNAMENT: 'REMOVE_SYNCED_TOURNAMENT' =
  'REMOVE_SYNCED_TOURNAMENT';

export const SELECT_SQUADRON: 'SELECT_SQUADRON' = 'SELECT_SQUADRON';
export const CLEAR_SQUADRON: 'CLEAR_SQUADRON' = 'CLEAR_SQUADRON';

export const SET_PLACEMENT: 'SET_PLACEMENT' = 'SET_PLACEMENT';
export const SET_NUMBER_OF_PLAYERS: 'SET_NUMBER_OF_PLAYERS' =
  'SET_NUMBER_OF_PLAYERS';

export const ADD_GAME: 'ADD_GAME' = 'ADD_GAME';
export const EDIT_GAME: 'EDIT_GAME' = 'EDIT_GAME';
export const REMOVE_GAME: 'REMOVE_GAME' = 'REMOVE_GAME';

export type AddTournamentAction = {
  type: typeof ADD_TOURNAMENT;
  name: string;
  format: Format;
  date: number;
  squadron: Squadron;
};

export type RemoveTournamentAction = {
  type: typeof REMOVE_TOURNAMENT;
  uid: string;
};

export type AddSyncedTournamentAction = {
  type: typeof ADD_SYNCED_TOURNAMENT;
  tournament: Tournament;
};

export type RemoveSyncedTournamentAction = {
  type: typeof REMOVE_SYNCED_TOURNAMENT;
  uid: string;
};

export type SelectSquadronAction = {
  type: typeof SELECT_SQUADRON;
  squadron: Squadron;
};

export type ClearSquadronAction = {
  type: typeof CLEAR_SQUADRON;
};

export type SetPlacementAction = {
  type: typeof SET_PLACEMENT;
  tournamentUid: string;
  placement: number;
};

export type SetNumberOfPlayersAction = {
  type: typeof SET_NUMBER_OF_PLAYERS;
  tournamentUid: string;
  numberOfPlayers: number;
};

export type AddGameAction = {
  type: typeof ADD_GAME;
  uid: string;
  tournamentUid: string;
};

export type EditGameAction = {
  type: typeof EDIT_GAME;
  tournamentUid: string;
  game: Game;
};

export type RemoveGameAction = {
  type: typeof REMOVE_GAME;
  tournamentUid: string;
  gameUid: string;
};

export type Action =
  | AddTournamentAction
  | RemoveTournamentAction
  | AddSyncedTournamentAction
  | RemoveSyncedTournamentAction
  | SelectSquadronAction
  | ClearSquadronAction
  | SetPlacementAction
  | SetNumberOfPlayersAction
  | AddGameAction
  | EditGameAction
  | RemoveGameAction;

export const addTournament = (
  name: string,
  format: Format,
  date: number,
  squadron: Squadron
): AddTournamentAction => ({
  type: ADD_TOURNAMENT,
  name,
  format,
  date,
  squadron,
});

export const removeTournament = (uid: string): RemoveTournamentAction => ({
  type: REMOVE_TOURNAMENT,
  uid,
});

export const addSyncedTournament = (
  tournament: Tournament
): AddSyncedTournamentAction => ({
  type: ADD_SYNCED_TOURNAMENT,
  tournament,
});

export const selectSquadron = (squadron: Squadron): SelectSquadronAction => ({
  type: SELECT_SQUADRON,
  squadron,
});

export const clearSquadron = (): ClearSquadronAction => ({
  type: CLEAR_SQUADRON,
});

export const setPlacement = (
  tournamentUid: string,
  placement: number
): SetPlacementAction => ({
  type: SET_PLACEMENT,
  tournamentUid,
  placement,
});

export const setNumberOfPlayers = (
  tournamentUid: string,
  numberOfPlayers: number
): SetNumberOfPlayersAction => ({
  type: SET_NUMBER_OF_PLAYERS,
  tournamentUid,
  numberOfPlayers,
});

export const addGame = (tournamentUid: string): AddGameAction => ({
  type: ADD_GAME,
  uid: uuid(),
  tournamentUid,
});

export const editGame = (
  tournamentUid: string,
  game: Game
): EditGameAction => ({
  type: EDIT_GAME,
  tournamentUid,
  game,
});

export const removeGame = (
  tournamentUid: string,
  gameUid: string
): RemoveGameAction => ({
  type: REMOVE_GAME,
  tournamentUid,
  gameUid,
});

export default {
  addTournament,
  removeTournament,
  addSyncedTournament,
  selectSquadron,
  clearSquadron,
  setPlacement,
  addGame,
  editGame,
  removeGame,
};
