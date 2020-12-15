import { loadSquadron } from 'lbn-core/dist/helpers/unit';
import { AppState } from 'lbn-core/dist/state';
import { Squadron } from 'lbn-core/dist/types';
import { useSelector } from 'react-redux';

export const useJWT = (): string | null | undefined =>
  useSelector((s: AppState) => s.app.user.jwt);

export const useSquadronXWS = (uid?: string) => {
  return useSelector((s: AppState) => s.app.xws.find((x) => x.uid === uid));
};

export const useSquadron = (uid: string): Squadron | undefined => {
  // const { params } = useRoute<any>();
  // return useSelector((s: AppState) => s.app.squadrons[params.squadronUid]);
  const xws = useSquadronXWS(uid);
  return loadSquadron(xws);
};

export const useTournament = (tournamentUid?: string) => {
  if (!tournamentUid) {
    return undefined;
  }
  return useSelector((s: AppState) =>
    s.app.tournaments.list.find((t) => t.uid === tournamentUid)
  );
};

export const useMinimized = (screenName: string) => {
  return useSelector((s: AppState) =>
    s.app.misc.minimized ? s.app.misc.minimized[screenName] || true : true
  );
};
