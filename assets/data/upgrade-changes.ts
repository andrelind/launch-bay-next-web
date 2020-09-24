import { UpgradeChange } from '../../types';

const t: UpgradeChange[] = [
  {
    xws: 'commanderpyre',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'agentterex',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: true },
  },
  {
    xws: 'commandermalarus',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 7 }, hyperspace: true },
  },
  {
    xws: 'sensorbuoysuite',
    slot: 'Tech',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: true },
  },
  {
    xws: 'fives',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 3 }, hyperspace: true },
  },
  {
    xws: 'aaylasecura',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 16 }, hyperspace: true },
  },
  {
    xws: 'kitfisto',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 9 }, hyperspace: true },
  },
  {
    xws: 'plokoon',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 10 }, hyperspace: true },
  },
  {
    xws: 'yoda',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 15 }, hyperspace: true },
  },
  {
    xws: 'ghostcompany',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'wolfpack',
    slot: 'Crew',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: true },
  },
  {
    xws: 'clonecaptainrex',
    slot: 'Gunner',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: true },
  },
  {
    xws: 'kalani',
    slot: 'Tactical Relay',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'syncedlasercannons',
    slot: 'Cannon',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: true },
  },
  {
    xws: 'suppressivegunner',
    slot: 'Gunner',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: {
      cost: {
        variable: 'size',
        values: { Small: 8, Medium: 7, Large: 6, Huge: 5 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'multimissilepods',
    slot: 'Missile',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 8 }, hyperspace: true },
  },
  {
    xws: 'concussionbomb',
    slot: 'Device',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 3 }, hyperspace: true },
  },
  {
    xws: 'deadeyeshot',
    slot: 'Talent',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'automatedtargetpriority',
    slot: 'Tech',
    prev: { cost: { value: 200 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
];

export default t;
