import { call, select, takeEvery } from 'redux-saga/effects';

import { REMOVE_SQUADRON, RemoveSquadronAction } from '../../actions/squadrons';
import { deleteSquadron } from '../../api/squadron';
import { UserState } from '../../reducers/user';
import { AppState } from '../../store/state';

const getUser = (state: AppState) => state.app.user;

function* deleteSquad(action: RemoveSquadronAction) {
  try {
    console.log('DELETE SQUADRON', action);

    const uid = action.squadronUid;
    if (!uid) {
      console.log('DELETE SQUADRON: NO UID');
      return;
    }

    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    const result = yield call(deleteSquadron, uid, user.jwt);
    if (
      result &&
      result.data &&
      result.data.remove &&
      result.data.remove.success === true
    ) {
      // Success
      console.log('DELETE SQUADRON: SUCCESS');
    } else {
      console.log('DELETE SQUADRON: FAILED', result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([REMOVE_SQUADRON], deleteSquad);
}

export default saga;
