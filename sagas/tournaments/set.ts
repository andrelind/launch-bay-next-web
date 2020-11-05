import { call, select, takeEvery } from "redux-saga/effects";
import {
  ADD_TOURNAMENT,
  EDIT_GAME,
  REMOVE_GAME,
  SET_NUMBER_OF_PLAYERS,
  SET_PLACEMENT,
} from "../../actions/tournaments";
import { UserState } from "../../reducers/user";
import { setTournament } from "../../requests/tournaments";
import { AppState } from "../../store/state";
import { Tournament } from "../../types";

const getUser = (state: AppState) => state.app.user || {};
const getTournaments = (state: AppState) => state.app.tournaments.list;

/*
    Used for updating tournaments on server via fire-n-forget
  */
function* setTournamentSaga(action: any): any {
  try {
    console.log("SET TOURNAMENT", action);

    const tournaments: Tournament[] = yield select(getTournaments);
    const uid =
      action.type === ADD_TOURNAMENT
        ? tournaments[tournaments.length - 1].uid
        : action.tournamentUid || tournaments[tournaments.length - 1].uid;

    if (!uid) {
      console.log("SET TOURNAMENT: UID NOT FOUND", uid);
      return;
    }

    console.log("SET TOURNAMENT: TOURNAMENTS", tournaments);
    const tournament: Tournament = tournaments.filter((s) => s.uid === uid)[0];
    if (!tournament) {
      console.log("SET TOURNAMENT: NOT FOUND", uid);
      return;
    }

    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    const result = yield call(setTournament, tournament, user.jwt);
    if (
      result &&
      result.data &&
      result.data.setTournament &&
      result.data.setTournament.success === true
    ) {
      // Success
      console.log("SET TOURNAMENT: SUCCESS");
    } else {
      console.log("SET TOURNAMENT: FAILED", result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery(
    [
      ADD_TOURNAMENT,
      EDIT_GAME,
      REMOVE_GAME,
      SET_PLACEMENT,
      SET_NUMBER_OF_PLAYERS,
    ],
    setTournamentSaga
  );
}

export default saga;
