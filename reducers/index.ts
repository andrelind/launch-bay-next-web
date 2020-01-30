import { combineReducers } from 'redux';

import blueprints from './blueprints';
import collection from './collection';
import filter from './filter';
import misc from './misc';
import tournaments from './tournaments';
import tutorial from './tutorial';
import user from './user';
import xws from './xws';

const reducers = {
  xws,
  tutorial,
  collection,
  blueprints,
  misc,
  user,
  filter,
  tournaments,
};

export default combineReducers(reducers);
