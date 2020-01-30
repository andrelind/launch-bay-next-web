import { call, select, takeEvery } from 'redux-saga/effects';

import { SAVE_BLUEPRINT } from '../../actions/blueprints';
import { setBlueprint } from '../../api/blueprints';
import { UserState } from '../../reducers/user';
import { AppState } from '../../store/state';
import { BluePrint } from '../../types';

const getUser = (state: AppState) => state.app.user || {};
const getBlueprints = (state: AppState) => state.app.blueprints || {};

function* setBlueprintSaga(): any {
  try {
    const user: UserState = yield select(getUser);
    if (!user.jwt) {
      return;
    }

    console.log('SET BLUEPRINT');

    const blueprints: BluePrint[] = yield select(getBlueprints);
    const { uid } = blueprints[blueprints.length - 1];
    if (!uid) {
      console.log('SET BLUEPRINT: NO UID');
      return;
    }

    const blueprint = blueprints.filter(s => s.uid === uid)[0];
    if (!blueprint) {
      console.log('SET BLUEPRINT: BLUEPRINT NOT FOUND');
      return;
    }

    const result = yield call(setBlueprint, blueprint, user.jwt);

    if (
      result &&
      result.data &&
      result.data.blueprint &&
      result.data.blueprint.success === true
    ) {
      // Success
      console.log('SET BLUEPRINT: SUCCESS');
    } else {
      // console.log(result);
      console.log('SET BLUEPRINT: FAIL', result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([SAVE_BLUEPRINT], setBlueprintSaga);
}

export default saga;
