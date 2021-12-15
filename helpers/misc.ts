import { SortingType, XWS } from './types';

export const move = (arr: any[], old_index: number, new_index: number) => {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    let k = new_index - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

export const compare = (a: XWS, b: XWS, sorting: SortingType): number => {
  if (sorting === 'Alphabetically') {
    if (!a || !a.name || !b || !b.name) {
      return 0;
    }
    return a.name.localeCompare(b.name);
  }
  if (sorting === 'Faction') {
    return a.faction.localeCompare(b.faction);
  }

  if (sorting === 'Points') {
    if (a.points > b.points) {
      return -1;
    }
    if (a.points < b.points) {
      return 1;
    }
  } else if (sorting === 'Format') {
    if (a.format > b.format) {
      return -1;
    }
    if (a.format < b.format) {
      return 1;
    }
  } else if (sorting === 'Wins') {
    if (a.vendor.lbn.wins > b.vendor.lbn.wins) {
      return -1;
    }
    if (a.vendor.lbn.wins < b.vendor.lbn.wins) {
      return 1;
    }
  } else if (sorting === 'Created Date') {
    if (a.vendor.lbn.created > b.vendor.lbn.created) {
      return -1;
    }
    if (a.vendor.lbn.created < b.vendor.lbn.created) {
      return 1;
    }
  }
  return 0;
};

export const sortXws = (
  a: XWS,
  b: XWS,
  first: SortingType,
  second: SortingType
) => {
  const c = compare(a, b, first);
  if (c === 0) {
    return compare(a, b, second);
  }
  return c;
};
