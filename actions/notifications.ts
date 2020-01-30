export const MARK_ALL_READ = 'MARK_ALL_READ';

export type MarkAllRead = {
  type: 'MARK_ALL_READ';
};

export type Action = MarkAllRead;

export const markAllRead = () => ({
  type: MARK_ALL_READ
});

export default {
  markAllRead
};
