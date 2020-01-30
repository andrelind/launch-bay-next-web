import { call, select, takeEvery } from 'redux-saga/effects';

import { REMOVE_BLUEPRINT, RemoveBlueprintAction } from '../../actions/blueprints';
import { deleteBlueprint } from '../../api/blueprints';
import { UserState } from '../../reducers/user';
import { AppState } from '../../store/state';

const getUser = (state: AppState) => state.app.user || {};

function* removeBlueprint(action: RemoveBlueprintAction) {
  try {
    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    console.log('DELETE BLUEPRINT');

    const { uid } = action;
    if (!uid) {
      console.log('DELETE BLUEPRINT: NO UID');
      return;
    }

    const result = yield call(deleteBlueprint, uid, user.jwt);
    if (
      result &&
      result.data &&
      result.data.removeBlueprint &&
      result.data.removeBlueprint.success === true
    ) {
      // Success
      // console.log('SUCCESS', { result });
      console.log('DELETE BLUEPRINT: SUCCESS');
    } else {
      console.log('DELETE BLUEPRINT', { result });
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([REMOVE_BLUEPRINT], removeBlueprint);
}

export default saga;
