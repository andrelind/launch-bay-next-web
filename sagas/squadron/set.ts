import { call, select, takeEvery } from "redux-saga/effects";
import {
  ADD_SHIP,
  ADD_SQUADRON,
  CHANGE_PILOT,
  COPY_SHIP,
  COPY_SQUADRON,
  DECREASE_SQUADRON_LOSSES,
  DECREASE_SQUADRON_WINS,
  IMPORT_SQUADRON,
  INCREASE_SQUADRON_LOSSES,
  INCREASE_SQUADRON_WINS,
  REMOVE_SHIP,
  RENAME_SQUADRON,
  SET_UPGRADE,
  TOGGLE_FAVOURITE_SQUADRON,
  TOGGLE_FORMAT_SQUADRON,
} from "../../actions/squadrons";
import { setSquadron } from "../../api/squadron";
import { UserState } from "../../reducers/user";
import { AppState } from "../../store/state";
import { SquadronXWS } from "../../types";

const getUser = (state: AppState) => state.app.user || {};
const getSquadronXws = (state: AppState) => state.app.xws;

/*
  Only used for updating squads on server via fire-n-forget
*/
function* setSquad(action: any): any {
  try {
    // console.log('SET SQUADRON', action);

    const squadrons: SquadronXWS[] = yield select(getSquadronXws);
    if (!squadrons.length) {
      return;
    }

    const uid =
      action.type === COPY_SQUADRON
        ? squadrons[squadrons.length - 1].uid
        : action.squadronUid || squadrons[squadrons.length - 1].uid;

    if (!uid) {
      console.log("SET SQUADRON: UID NOT FOUND", uid);
      return;
    }

    const squadron: SquadronXWS = squadrons.filter((s) => s.uid === uid)[0];
    if (!squadron) {
      console.log("SET SQUADRON: NOT FOUND", uid);
      return;
    }

    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    const result = yield call(setSquadron, squadron, user.jwt);
    if (
      result &&
      result.data &&
      result.data.set &&
      result.data.set.success === true
    ) {
      // Success
      // console.log('SET SQUADRON: SUCCESS');
    } else {
      console.log("SET SQUADRON: FAILED", result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery(
    [
      IMPORT_SQUADRON,
      ADD_SQUADRON,
      COPY_SQUADRON,
      RENAME_SQUADRON,
      ADD_SHIP,
      COPY_SHIP,
      REMOVE_SHIP,
      CHANGE_PILOT,
      SET_UPGRADE,
      TOGGLE_FAVOURITE_SQUADRON,
      TOGGLE_FORMAT_SQUADRON,
      INCREASE_SQUADRON_WINS,
      DECREASE_SQUADRON_WINS,
      INCREASE_SQUADRON_LOSSES,
      DECREASE_SQUADRON_LOSSES,
    ],
    setSquad
  );
}

export default saga;
