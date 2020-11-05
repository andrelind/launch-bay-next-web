import { call, select, takeEvery } from "redux-saga/effects";
import {
  DECREASE_ADDITIONAL_PILOT,
  DECREASE_ADDITIONAL_SHIP,
  DECREASE_ADDITIONAL_UPGRADE,
  DECREASE_SOURCE_EXPANSION,
  INCREASE_ADDITIONAL_PILOT,
  INCREASE_ADDITIONAL_SHIP,
  INCREASE_ADDITIONAL_UPGRADE,
  INCREASE_SOURCE_EXPANSION,
} from "../actions/collection";
import { setCollection } from "../requests/collection";
import { AppState } from "../store/state";

const getUser = (state: AppState) => state.app.user || {};
const getCollection = (state: AppState) => state.app.collection;

function* doSync(): any {
  try {
    const user = yield select(getUser);
    if (!user.name) {
      return;
    }

    const collection = yield select(getCollection);
    const result = yield call(setCollection, collection || {}, user);
    console.log("SET COLLECTION", result.data);
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery(
    [
      INCREASE_SOURCE_EXPANSION,
      DECREASE_SOURCE_EXPANSION,
      INCREASE_ADDITIONAL_PILOT,
      DECREASE_ADDITIONAL_PILOT,
      INCREASE_ADDITIONAL_SHIP,
      DECREASE_ADDITIONAL_SHIP,
      INCREASE_ADDITIONAL_UPGRADE,
      DECREASE_ADDITIONAL_UPGRADE,
    ],
    doSync
  );
}

export default saga;
