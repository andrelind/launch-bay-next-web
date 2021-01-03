import {
  UpgradeCostAgility,
  UpgradeCostInitiative,
  UpgradeCostSize,
  UpgradeCostValue,
} from 'lbn-core/dist/types';

export const getUpgradeCost = (cost: any) => {
  if (!cost) {
    return 0;
  }
  if (cost.value) {
    return `${(cost as UpgradeCostValue).value}`;
  }
  if (cost.variable && cost.variable === 'agility') {
    const typedCost = cost as UpgradeCostAgility;
    return Object.keys(typedCost.values)
      .map((key) => `A${key}:${typedCost.values[parseInt(key)]}`)
      .join('\n');
  } else if (cost.variable && cost.variable === 'initiative') {
    const typedCost = cost as UpgradeCostInitiative;
    return Object.keys(typedCost.values)
      .map((key) => `I${key}:${typedCost.values[parseInt(key)]}`)
      .join('\n');
  } else if (cost.variable && cost.variable === 'size') {
    const typedCost = cost as UpgradeCostSize;
    return Object.keys(typedCost.values)
      .slice(0, 3)
      .map(
        (key) =>
          `${key}:${
            typedCost.values[key as 'Small' | 'Medium' | 'Large' | 'Huge']
          }`
      )
      .join('\n');
  }
};
