import { Action, MARK_TUTORIAL_COMPLETED } from '../actions/tutorial';

export type TutorialState = {
  completed: boolean;
};

const initialState = {
  completed: false
};

export default function onAction(
  state: TutorialState = initialState,
  action: Action
) {
  // console.log(action);
  switch (action.type) {
    case MARK_TUTORIAL_COMPLETED: {
      return {
        completed: action.completed
      };
    }

    default:
  }
  return state;
}
