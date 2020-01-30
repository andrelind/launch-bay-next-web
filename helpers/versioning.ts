export const bumpMajor = (ver: string) => {
  const parts = ver.split('.');
  parts[0] = `${parseInt(parts[0]) + 1}`;
  return parts.join('.');
};

export const bumpMinor = (ver: string) => {
  const parts = ver.split('.');
  parts[1] = `${parseInt(parts[1]) + 1}`;
  return parts.join('.');
};

export const bumpPatch = (ver: string) => {
  const parts = ver.split('.');
  parts[2] = `${parseInt(parts[2]) + 1}`;
  return parts.join('.');
};

export const compareVersions = (a: string, b: string) => {
  const aParts = a.split('.').map(x => parseInt(x));
  const bParts = b.split('.').map(x => parseInt(x));

  if (aParts[0] > bParts[0]) {
    return -1;
  }
  if (aParts[0] < bParts[0]) {
    return 1;
  }
  if (aParts[1] > bParts[1]) {
    return -1;
  }
  if (aParts[1] < bParts[1]) {
    return 1;
  }
  if (aParts[2] > bParts[2]) {
    return -1;
  }
  if (aParts[2] < bParts[2]) {
    return 1;
  }
  return 0;
};
