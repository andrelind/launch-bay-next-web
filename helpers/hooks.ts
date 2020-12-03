import { useRoute } from "@react-navigation/core";
import { loadSquadron } from "lbn-core/dist/helpers/unit";
import { AppState } from "lbn-core/dist/state";
import { useSelector } from "react-redux";
import { Squadron } from "../types";

export const useJWT = (): string | null | undefined =>
  useSelector((s: AppState) => s.app.user.jwt);

export const useSquadronXWS = (uid: string) => {
  return useSelector((s: AppState) => s.app.xws.find((x) => x.uid === uid));
};

export const useSquadron = (uid: string): Squadron | undefined => {
  // const { params } = useRoute<any>();
  // return useSelector((s: AppState) => s.app.squadrons[params.squadronUid]);
  const xws = useSquadronXWS(uid);
  return loadSquadron(xws);
};

export const useShip = (squadron?: Squadron) => {
  const { params } = useRoute<any>();
  if (!params || !squadron) {
    return undefined;
  }
  const { unitUid } = params;
  const ship = squadron.ships.find((s) => s.uid === unitUid);

  // Add a Command slot for epic ships that doesn't already have one...
  if (
    squadron.format === "Epic" &&
    ship &&
    !ship.pilot.slots.find((s) => s === "Command") &&
    ship.upgrades &&
    !ship.upgrades.command
  ) {
    ship.pilot.slots = [...ship.pilot.slots, "Command"];
  }
  return ship;
};

export const useTournament = () => {
  const { params } = useRoute<any>();
  if (!params || !params.tournamentUid) {
    return undefined;
  }
  return useSelector((s: AppState) =>
    s.app.tournaments.list.find((t) => t.uid === params.tournamentUid)
  );
};

export const useMinimized = (screenName: string) => {
  return useSelector((s: AppState) =>
    s.app.misc.minimized ? s.app.misc.minimized[screenName] || true : true
  );
};
