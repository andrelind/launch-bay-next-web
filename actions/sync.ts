import { SquadronXWS } from 'types';

export const SYNC_SQUADS = 'SYNC_SQUADS';
export const FULL_SYNC = 'FULL_SYNC';

export type SyncSquadsAction = {
  type: 'SYNC_SQUADS';
};

export type FullSyncAction = {
  type: typeof FULL_SYNC;
  payload: { squadrons: SquadronXWS[] };
};

export type Action = FullSyncAction | SyncSquadsAction;

export const syncSquads = () => ({
  type: SYNC_SQUADS,
});

export const fullSync = (payload: {
  squadrons: SquadronXWS[];
}): FullSyncAction => ({
  type: FULL_SYNC,
  payload,
});

export default {
  syncSquads,
  fullSync,
};
