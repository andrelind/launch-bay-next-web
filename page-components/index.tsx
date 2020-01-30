import { toggleMinimize } from '@actions/misc';
import {
  addShipAction,
  addSquadron,
  changePilotAction,
  copyShip,
  importSquadron,
  removeShip,
  removeSquadron,
  renameSquadron,
  toggleFormat,
} from '@actions/squadrons';
import { fullSync } from '@actions/sync';
import { userDidLogin } from '@actions/user';
import FormatComponent from '@components/format';
import { InputComponent } from '@components/input';
import PilotComponent from '@components/pilot';
import ShipType from '@components/ship-type';
import { faCopy, faEdit, faShareSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { AppState } from '@store/state';
import { sync } from 'api/sync';
import { buttonBlue, red } from 'assets/colors';
import { copyToClipboard } from 'helpers/clipboard';
import { keyFromSlot } from 'helpers/convert';
import { useMinimized, useSquadronXWS, useTheme } from 'helpers/hooks';
import { exportAsText, exportAsTTS, exportAsXws } from 'helpers/import+export';
import { deserialize, serialize } from 'helpers/serializer';
import { loadSquadron } from 'helpers/unit';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { components } from 'react-select';
import { Store } from 'redux';
import useMedia from 'use-media';
import uuid from 'uuid/v4';

import Page from '../components/page';
import Select from '../components/select';
import Unit from '../components/unit';
import { Faction, Ship, Slot, Upgrade } from '../types';
import { getUpgrades, loadShips, pilotOptions, PilotValue, shipForXws, ShipValue } from './loader';
import { renderHardpoint, renderUpgrade } from './render';
import {
  Block,
  BottomWrapper,
  Column,
  FaIcon,
  Row,
  RowStyle,
  ShipWrapper,
  Text,
  TitleEnd,
  TopRow,
  TopWrapper,
} from './styles';

export type DataItem = {
  type: 'Ship' | 'Upgrade' | 'Empty' | 'SlotOptions';
  key: string;
  slot: Slot;
  index: number;
  slotIndex?: number;
  ship?: Ship;
  upgrade?: Upgrade;
  title?: string;
  slotOptions?: Slot[];
};

type Props = {
  uid: string;
  onShowMenu: () => void;
};

const EditPage = ({ uid, onShowMenu }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isWide = useMedia({ minWidth: 1024 });
  const isTablet = useMedia({ minWidth: 600 });

  const xws = useSquadronXWS(uid);
  const squadron = loadSquadron(xws);
  const [name, setName] = useState(squadron ? squadron.name : 'New Squadron');
  const minimized = useMinimized('index');

  const allSquadrons = useSelector((s: AppState) => s.app.xws);
  const [shipBase, setShipBase] = useState(undefined as ShipValue);

  const p: { [s: string]: Slot } = {};
  squadron.ships.forEach(s => {
    if (
      s.pilot.shipAbility &&
      s.upgrades &&
      s.pilot.shipAbility.slotOptions &&
      s.pilot.shipAbility.slotOptions.find(
        sl => s.upgrades && s.upgrades[keyFromSlot(sl)]
      )
    ) {
      p[s.uid] = s.pilot.shipAbility.slotOptions.find(
        sl => s.upgrades && s.upgrades[keyFromSlot(sl)]
      );
    }
  });
  const [hardpoints, setHardpoints] = useState(p);

  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    if (!xws) {
      return;
    }
    setName(xws.name);

    const url = `?lbx=${serialize(xws)}&uid=${uid}`;
    window.history.pushState('', '', url);
  }, [xws]);

  if (!xws || !squadron) {
    return null;
  }

  const SingleValue = ({ data }) => (
    <RowStyle>
      <Unit
        hideUpgrades={true}
        showCostWithUpgrades={true}
        ship={data.ship}
        minimized={minimized}
      />
    </RowStyle>
  );

  const Option = ({ data, ...rest }) => (
    // @ts-ignore
    <components.Option {...rest}>
      <ShipType shipType={data.ship} minimized={true} />
    </components.Option>
  );

  const PilotOption = ({ data, ...rest }) => (
    // @ts-ignore
    <components.Option {...rest}>
      <PilotComponent pilot={data.pilot} minimized={true} />
    </components.Option>
  );

  return (
    <Page onShowMenu={onShowMenu}>
      <TopRow>
        <Column>
          <Row>
            <FontAwesomeIcon
              icon={faEdit}
              color={theme.text}
              style={{ marginBottom: 10, marginRight: 5 }}
            />
            <InputComponent
              type={'text'}
              name={'squadronName'}
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={() => dispatch(renameSquadron(squadron.uid, name))}
            />
          </Row>
          <FormatComponent
            format={squadron.format}
            onClick={() => dispatch(toggleFormat(squadron.uid))}
          />
        </Column>

        <Column>
          <Text style={{ textAlign: 'center' }}>{squadron.cost} points</Text>
        </Column>

        <TitleEnd>
          <Button
            color={'secondary'}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={event => setAnchorEl(event.currentTarget)}
            endIcon={
              <FontAwesomeIcon
                icon={faShareSquare}
                style={{ height: 15, width: 15 }}
              />
            }
          >
            Actions
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                const url = `/print?lbx=${serialize(xws)}&mode=${
                  minimized ? 'compact' : 'full'
                }`;
                window.open(url, '_ blank');
              }}
            >
              Open print page
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsXws(squadron));
              }}
            >
              Copy XWS
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsTTS(squadron));
              }}
            >
              Copy TTS
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsText(squadron));
              }}
            >
              Copy as text
            </MenuItem>
            <MenuItem
              style={{ color: red }}
              onClick={() => {
                setAnchorEl(null);
                dispatch(removeSquadron(uid));
                if (allSquadrons.length > 1) {
                  const u =
                    allSquadrons[0].uid !== uid
                      ? allSquadrons[0].uid
                      : allSquadrons[1].uid;
                  router.push(`/?uid=${u}`);
                }
              }}
            >
              Delete squadron
            </MenuItem>
          </Menu>
        </TitleEnd>
      </TopRow>

      <Block>
        {squadron.ships.map((s, i) => {
          const showHardpointPicker =
            s.pilot.shipAbility &&
            s.upgrades &&
            s.pilot.shipAbility.slotOptions &&
            !s.pilot.shipAbility.slotOptions.find(
              sl => s.upgrades && s.upgrades[keyFromSlot(sl)]
            );

          const upgrades = getUpgrades(
            squadron,
            s,
            hardpoints[s.uid] ? [hardpoints[s.uid]] : []
          );
          const u1 = upgrades.filter((_, i) => !(i % 2));
          const u2 = upgrades.filter((_, i) => i % 2);

          const shipType = shipForXws(squadron, s.xws);

          return (
            <ShipWrapper
              key={s.uid}
              isWide={isWide}
              isLast={i === squadron.ships.length - 1}
            >
              <TopWrapper>
                <Select
                  components={{
                    Option: PilotOption,
                    SingleValue,
                    IndicatorSeparator: null,
                  }}
                  instanceId={'changePilot'}
                  faction={squadron.faction}
                  // @ts-ignore
                  value={{ value: s.xws, label: s.name, ship: s }}
                  onChange={(p: PilotValue) => {
                    dispatch(
                      changePilotAction(
                        squadron.uid,
                        s.uid,
                        p.pilot.xws,
                        s.pilot.slots.find(s => s === 'Force Power') !== null,
                        s.pilot.slots.find(s => s === 'Talent') !== null
                      )
                    );
                  }}
                  options={pilotOptions(shipType)}
                />
                {showHardpointPicker &&
                  renderHardpoint(hardpoints[s.uid], squadron, v => {
                    hardpoints[s.uid] = v;
                    setHardpoints({ ...hardpoints });
                  })}
              </TopWrapper>

              <Column style={{ flex: 3, alignSelf: 'stretch' }}>
                {isTablet &&
                  u1.map((upgrade, index) => (
                    <BottomWrapper
                      key={uuid()}
                      style={{ marginLeft: 10, marginRight: 10 }}
                    >
                      {renderUpgrade(
                        upgrade,
                        squadron,
                        s,
                        minimized,
                        upgrades.indexOf(upgrade)
                      )}
                      {u2.length > index &&
                        renderUpgrade(
                          u2[index],
                          squadron,
                          s,
                          minimized,
                          upgrades.indexOf(u2[index])
                        )}
                      {u2.length <= index && (
                        <div style={{ display: 'flex', flex: 1 }} />
                      )}
                    </BottomWrapper>
                  ))}
                {!isTablet &&
                  upgrades.map((upgrade, index) => (
                    <BottomWrapper key={uuid()}>
                      {renderUpgrade(upgrade, squadron, s, minimized, index)}
                    </BottomWrapper>
                  ))}
                <div style={{ display: 'flex', flex: 1 }} />
              </Column>

              <Column>
                <FaIcon
                  style={{ width: 17, height: 17 }}
                  icon={faTimes}
                  color={red}
                  onClick={() => dispatch(removeShip(squadron.uid, s.uid))}
                />
                <FaIcon
                  style={{ width: 17, height: 17 }}
                  icon={faCopy}
                  color={buttonBlue}
                  onClick={() => dispatch(copyShip(squadron.uid, s.uid))}
                />
              </Column>
            </ShipWrapper>
          );
        })}
      </Block>

      <Select
        components={{ Option, IndicatorSeparator: null }}
        instanceId={'selectShip'}
        faction={squadron.faction}
        placeholder={'Add ship'}
        value={shipBase}
        onChange={(v: ShipValue) => setShipBase(v)}
        options={loadShips(squadron)}
      />

      {shipBase && (
        <Select
          components={{ Option: PilotOption, IndicatorSeparator: null }}
          instanceId={'selectPilot'}
          faction={squadron.faction}
          placeholder={'Select pilot'}
          onChange={(value: PilotValue) => {
            dispatch(
              addShipAction(squadron.uid, shipBase.ship.xws, value.pilot.xws)
            );
            setShipBase(null);
          }}
          options={pilotOptions(shipBase)}
        />
      )}
    </Page>
  );
};

EditPage.getInitialProps = async (ctx: NextPageContext) => {
  let { lbx, faction, uid = uuid() } = ctx.query;

  // @ts-ignore
  const store: Store<AppState> = ctx.store;

  // @ts-ignore
  if (ctx.req && ctx.req.user) {
    // @ts-ignore
    const user: UserState = ctx.req.user;
    store.dispatch(userDidLogin(user));
    const { data } = await sync(user.jwt);
    store.dispatch(fullSync(data));
  }

  // Om vi inte har den sparad så är det dax att skapa, vi sätter nytt uid då
  if (!store.getState().app.xws.find(x => x && x.uid === uid)) {
    if (lbx) {
      // Importera utifrån
      const xws = deserialize(lbx as string, uuid());
      uid = xws.uid;
      store.dispatch(importSquadron(xws));
    } else if (!faction && store.getState().app.xws.length > 0) {
      // Hämtar första
      uid = store.getState().app.xws[0].uid;
    } else {
      // Skapa helt ny
      uid = store.dispatch(
        addSquadron(
          uid as string,
          (faction || 'Rebel Alliance') as Faction,
          'Hyperspace'
        )
      ).uid;
    }
  }

  const { minimized } = parseCookies(ctx);
  if (minimized === 'true' && !store.getState().app.misc.minimized.index) {
    store.dispatch(toggleMinimize('index'));
  }

  return { uid };
};

export default EditPage;
