import { api } from "./request";

export const sync = async (access_token?: string | null) => {
  const query = `query {
      squadrons {
        uid
        name
        faction
        version
        description
        cost
        favourite
        format
        wins
        losses
        pilots {
          uid
          name
          ship
          cost
          upgrades {
            astromech
            cannon
            cargo
            command
            configuration
            crew
            device
            forcepower
            gunner
            hardpoint
            illicit
            missile
            modification
            sensor
            talent
            tacticalrelay
            team
            tech
            title
            torpedo
            turret
          }
        }
      }
      removed
      collection {
        timestamp
        expansions {
          id
          count
        }
        ships {
          id
          count
        }
        pilots {
          id
          count
        }
        upgrades {
          id
          count
        }
      }
      blueprints {
        uid
        faction
        nick
        ship
        name
        upgrades {
          astromech
          cannon
          cargo
          command
          configuration
          crew
          device
          forcepower
          gunner
          hardpoint
          illicit
          missile
          modification
          sensor
          talent
          tacticalrelay
          team
          tech
          title
          torpedo
          turret
        }
      }
      removedBlueprints
      tournaments {
        uid
        name
        date
        format
        squadron
        placement
        numberOfPlayers
        version
        games {
          uid
          gameType
          bye
          win
          round
          score
          notes
          opponent {
            name
            score
            squadron
          }
        }
      }
      removedTournaments
    }`;

  if (!access_token) {
    return;
  }

  const result: any = await api(access_token, query);
  if (result && result.data) {
    if (result.data.squadrons && result.data.squadrons !== null) {
      result.data.squadrons.map((ss: any) =>
        ss.pilots.map((p: any) => {
          Object.keys(p.upgrades || {}).map((key) => {
            if (!p.upgrades[key] || p.upgrades.length === 0) {
              delete p.upgrades[key];
            }
            return p.upgrades;
          });

          return p;
        })
      );
    }
    if (result.data.blueprints) {
      result.data.blueprints.map((b: any) => {
        Object.keys(b.upgrades || {}).map((key) => {
          if (!b.upgrades[key] || b.upgrades.length === 0) {
            delete b.upgrades[key];
          }
          return b.upgrades;
        });

        return b;
      });
    }
    if (result.data.tournaments) {
      result.data.tournaments.map((b: any) => {
        b.date = new Date(b.date * 1000);
        return b;
      });
    }
  }

  return result;
};
