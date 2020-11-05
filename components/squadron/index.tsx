import { useRouter } from "next/router";
import React from "react";
import { useLocalized } from "../../helpers/i18n";
import { Ship, Squadron } from "../../types";
import FormatComponent from "../format";
import {
  Block,
  ContentWrapper,
  FactionIcon,
  FavButton,
  Pilots,
  Points,
  RowWrapper,
  SquadronName,
  WinLoss,
} from "./styles";

type Props = {
  squadron: Squadron;
  toggleFavouriteSquad?: () => void;
};

const SquadronComponent = ({ squadron, toggleFavouriteSquad }: Props) => {
  const { t } = useLocalized();

  const getUnique = (units: Ship[]) => {
    if (units.length === 0) {
      return undefined;
    }

    const all = units.map((u) => u.pilot.xws);
    const unique = [...new Set(all)];
    const fullCount = unique.map((u) => ({
      xws: u,
      count: all.filter((a) => a === u).length,
    }));

    return fullCount
      .map((u) => {
        const { name } = units.filter(
          (unit) => unit.pilot.xws === u.xws
        )[0].pilot;
        if (u.count > 1) {
          return `${u.count}x ${t(name)}`;
        }
        return t(name);
      })
      .join(", ");
  };

  const joinedPilots = getUnique(squadron.ships) || "";
  const router = useRouter();

  return (
    <Block onClick={() => router.push(`/?uid=${squadron.uid}`)}>
      <FactionIcon icon={squadron.faction} />

      <ContentWrapper>
        <RowWrapper>
          <SquadronName>
            {squadron.name}
            {(squadron.wins > 0 || squadron.losses > 0) && (
              <WinLoss>{` ${squadron.wins}/${squadron.losses}`}</WinLoss>
            )}
          </SquadronName>
          <Points>{squadron.cost}</Points>
        </RowWrapper>

        <RowWrapper>
          {joinedPilots.length > 0 && <Pilots>{joinedPilots}</Pilots>}
        </RowWrapper>
        <RowWrapper>
          {squadron.format && <FormatComponent format={squadron.format} />}
          {joinedPilots.length > 0 && toggleFavouriteSquad && (
            <FavButton
              // hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
              onClick={toggleFavouriteSquad}
            >
              {/* <FavIcon favourite={squadron.favourite} name={"star"} /> */}
              STAR
            </FavButton>
          )}
        </RowWrapper>
      </ContentWrapper>
    </Block>
  );
};

export default SquadronComponent;
