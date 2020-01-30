import { Action as BlueprintsAction } from './blueprints';
import { Action as FilterAction } from './filter';
import { Action as MiscAction } from './misc';
import { Action as NotificationAction } from './notifications';
import { Action as SquadronsAction } from './squadrons';
import { Action as SyncAction } from './sync';
import { Action as TournamentAction } from './tournaments';
import { Action as TutorialAction } from './tutorial';
import { Action as UserAction } from './user';

export type Actions =
  | SquadronsAction
  | TutorialAction
  | NotificationAction
  | BlueprintsAction
  | UserAction
  | FilterAction
  | MiscAction
  | TournamentAction
  | SyncAction;
