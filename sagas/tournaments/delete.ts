import { call, select, takeEvery } from 'redux-saga/effects';

import { REMOVE_TOURNAMENT, RemoveTournamentAction } from '../../actions/tournaments';
import { deleteTournament } from '../../api/tournaments';
import { UserState } from '../../reducers/user';
import { AppState } from '../../store/state';

const getUser = (state: AppState) => state.app.user || {};

function* removeTournament(action: RemoveTournamentAction) {
  try {
    console.log('DELETE TOURNAMENT', action);

    const { uid } = action;
    if (!uid) {
      console.log('DELETE TOURNAMENT: NO UID');
      return;
    }

    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    const result = yield call(deleteTournament, uid, user.jwt);
    if (
      result &&
      result.data &&
      result.data.removeTournament &&
      result.data.removeTournament.success === true
    ) {
      // Success
      console.log('DELETE TOURNAMENT: SUCCESS');
    } else {
      console.log('DELETE TOURNAMENT: FAILED', result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([REMOVE_TOURNAMENT], removeTournament);
}

export default saga;
