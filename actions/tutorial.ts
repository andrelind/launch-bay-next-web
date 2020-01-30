export const MARK_TUTORIAL_COMPLETED = 'MARK_TUTORIAL_COMPLETED';

export type MarkTutorialCompleted = {
  type: 'MARK_TUTORIAL_COMPLETED';
  completed: boolean;
};

export type Action = MarkTutorialCompleted;

export const markTutorialCompleted = (completed: boolean = true) => ({
  type: MARK_TUTORIAL_COMPLETED,
  completed
});

export default {
  markTutorialCompleted
};
