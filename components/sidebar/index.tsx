import { toggleMinimize } from '@actions/misc';
import LogoComponent from '@components/logo';
import SquadronComponent from '@components/squadron';
import {
  faCompress,
  faExpand,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppState } from '@store/state';
import { darkgrey, yellow } from 'assets/colors';
import { SwitchComponent } from 'components/switch';
import { useJWT, useMinimized, useTheme } from 'helpers/hooks';
import { loadSquadron } from 'helpers/unit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Faction } from 'types';
import useDarkMode from 'use-dark-mode';

import { factions } from '../../helpers/enums';
import {
  Block,
  ContentWrapper,
  Footer,
  Icon,
  LogoWrapper,
  RouteButton,
} from './styles';

type Props = {
  darkMode: boolean;
};

const SideBarComponent = ({ darkMode }: Props) => {
  const { value, enable, disable } = useDarkMode(darkMode);
  const jwt = useJWT();

  const squadrons = useSelector((s: AppState) =>
    s.app.xws.map(x => loadSquadron(x))
  );

  const theme = useTheme();
  const router = useRouter();
  const minimized = useMinimized('index');
  const dispatch = useDispatch();

  const getColor = (faction: Faction) => {
    if (faction === 'Galactic Empire' || faction === 'First Order') {
      return theme.text;
    }
    return undefined;
  };

  return (
    <Block>
      <LogoWrapper>
        <LogoComponent />
      </LogoWrapper>

      <ContentWrapper>
        {factions.map(f => (
          <RouteButton
            key={f}
            style={{ margin: 0 }}
            onClick={() => router.push(`/?faction=${f}`)}
          >
            <Icon style={{ cursor: 'pointer' }} icon={f} color={getColor(f)} />
          </RouteButton>
        ))}
      </ContentWrapper>

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        {squadrons.map(s => (
          <SquadronComponent key={s.uid} squadron={s} />
        ))}
      </div>

      <Footer>
        {jwt && (
          <Link href={'/logout'}>
            <RouteButton>Logout</RouteButton>
          </Link>
        )}

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          {!jwt && (
            <Link href={'/api/auth/facebook'}>
              <RouteButton>Facebook</RouteButton>
            </Link>
          )}
          {!jwt && (
            <Link href={'/api/auth/google'}>
              <RouteButton>Google</RouteButton>
            </Link>
          )}
        </div>

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faSun}
              color={value ? darkgrey : yellow}
              style={{ marginRight: 5, width: 13, height: 13 }}
            />
            <SwitchComponent
              value={value}
              onChange={c => {
                c ? enable() : disable();
              }}
            />
            <FontAwesomeIcon
              icon={faMoon}
              color={value ? yellow : darkgrey}
              style={{ marginLeft: 5, width: 13, height: 13 }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faCompress}
              color={!minimized ? darkgrey : yellow}
              style={{ marginRight: 5, width: 13, height: 13 }}
            />
            <SwitchComponent
              value={!minimized}
              onChange={value => {
                setCookie(undefined, 'minimized', `${!value}`, {});
                dispatch(toggleMinimize('index'));
              }}
            />
            <FontAwesomeIcon
              icon={faExpand}
              color={!minimized ? yellow : darkgrey}
              style={{ marginLeft: 5, width: 13, height: 13 }}
            />
          </div>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}
        >
          <a href={'/privacy'}>Privacy Policy</a>
        </div>
      </Footer>
    </Block>
  );
};

export default SideBarComponent;
