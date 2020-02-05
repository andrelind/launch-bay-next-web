import QRCode from 'qrcode.react';
import React from 'react';

import Logo from '../../components/logo';
import Unit from '../../components/unit';
import Upgrade from '../../components/upgrade';
import { exportAsQR } from '../../helpers/import+export';
import { deserialize } from '../../helpers/serializer';
import { loadSquadron } from '../../helpers/unit';
import { Ship, Squadron } from '../../types';
import {
  Block,
  BottomWrapper,
  ShipSummary,
  ShipWrapper,
  Text,
  Title,
  TitleWrapper,
  TopFlexer,
  TopWrapper,
  UpgradeWrapper,
} from './styles';

type Props = {
  squadron?: Squadron;
  mode: 'compact' | 'full';
};

const PrintPage = ({ squadron, mode }: Props) => {
  if (!squadron) {
    return <div />;
  }

  const threshold = (ship: Ship) => {
    const shields = ship.stats.filter(s => s.type === 'shields')[0]
      ? ship.stats.filter(s => s.type === 'shields')[0].value
      : 0;

    const hull = ship.stats.filter(s => s.type === 'hull')[0]
      ? ship.stats.filter(s => s.type === 'hull')[0].value
      : 0;

    return Math.ceil((shields + hull) * 0.5);
  };

  const lbx = exportAsQR(squadron);

  return (
    <Block>
      <TitleWrapper>
        <Logo />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Title>
            {squadron.name} [{squadron.format}]
          </Title>
          <Title>{squadron.cost} points</Title>
        </div>
        <QRCode
          value={`https://launch-bay-next.herokuapp.com/print?lbx=${lbx}`}
          renderAs="svg"
          size={92}
        />
      </TitleWrapper>
      {squadron.ships.map(s => (
        <ShipWrapper key={s.uid}>
          <ShipSummary>
            <span>
              <Text style={{ marginRight: 10 }}>
                Half points: {Math.ceil(s.pointsWithUpgrades / 2)}
              </Text>
              <Text>Threshold: {threshold(s)}</Text>
            </span>
            <Text style={{ fontWeight: 'bold' }}>
              Total: {s.pointsWithUpgrades}
            </Text>
          </ShipSummary>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <TopWrapper>
              <Unit
                hideUpgrades={true}
                showCostWithUpgrades={false}
                ship={s}
                minimized={mode === 'compact'}
              />
              <TopFlexer />
            </TopWrapper>
            <BottomWrapper>
              {Object.keys(s.upgrades).map(key => {
                const upgrades = s.upgrades[key];
                if (!upgrades) {
                  return;
                }

                return upgrades.map(u => (
                  <UpgradeWrapper key={u.xws}>
                    <Upgrade
                      showType
                      count={undefined}
                      side={0}
                      upgrade={u}
                      minimized={mode === 'compact'}
                    />
                  </UpgradeWrapper>
                ));
              })}
            </BottomWrapper>
          </div>
        </ShipWrapper>
      ))}
    </Block>
  );
};

PrintPage.getInitialProps = (ctx: any) => {
  const { lbx, mode = 'full' } = ctx.query;
  if (lbx) {
    const xws = deserialize(lbx);
    const squadron = loadSquadron(xws);
    return { squadron, mode };
  }

  return {};
};

export default PrintPage;
