import {
  faCompress,
  faExpand,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { darkgrey, yellow } from "../../assets/colors";
import SquadronComponent from "../../components/squadron";
import { factions } from "../../helpers/enums";
import { useJWT, useMinimized, useTheme } from "../../helpers/hooks";
import { loadSquadron } from "../../helpers/unit";
import { AppState } from "../../store/state";
import { Faction } from "../../types";
import LogoComponent from "../logo";
import {
  Block,
  ContentWrapper,
  Footer,
  Icon,
  LogoWrapper,
  RouteButton,
} from "./styles";

type Props = {
  darkMode: boolean;
};

const SideBarComponent = ({}: Props) => {
  const jwt = useJWT();

  const squadrons = useSelector((s: AppState) =>
    s.app.xws.map((x) => loadSquadron(x))
  );

  const theme = useTheme();
  const router = useRouter();
  const minimized = useMinimized("index");

  const getColor = (faction: Faction) => {
    if (faction === "Galactic Empire" || faction === "First Order") {
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
        {factions.map((f) => (
          <RouteButton
            key={f}
            style={{ margin: 0 }}
            onClick={() => router.push(`/?faction=${f}`)}
          >
            <Icon className="cursor-pointer" icon={f} color={getColor(f)} />
          </RouteButton>
        ))}
      </ContentWrapper>

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {squadrons.map(
          (s) => s && <SquadronComponent key={s.uid} squadron={s} />
        )}
      </div>

      <Footer>
        {jwt && (
          <Link href={"/logout"}>
            <RouteButton>Logout</RouteButton>
          </Link>
        )}

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          {!jwt && (
            <Link href={"/api/auth/facebook"}>
              <RouteButton>Facebook</RouteButton>
            </Link>
          )}
          {!jwt && (
            <Link href={"/api/auth/google"}>
              <RouteButton>Google</RouteButton>
            </Link>
          )}
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faSun}
              color={yellow}
              style={{ marginRight: 5, width: 13, height: 13 }}
            />
            {/* <SwitchComponent
              value={value}
              onChange={(c) => {
                c ? enable() : disable();
              }}
            /> */}
            <FontAwesomeIcon
              icon={faMoon}
              color={darkgrey}
              style={{ marginLeft: 5, width: 13, height: 13 }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faCompress}
              color={!minimized ? darkgrey : yellow}
              style={{ marginRight: 5, width: 13, height: 13 }}
            />
            {/* <SwitchComponent
              value={!minimized}
              onChange={(value) => {
                setCookie(undefined, "minimized", `${!value}`, {});
                dispatch(toggleMinimize("index"));
              }}
            /> */}
            <FontAwesomeIcon
              icon={faExpand}
              color={!minimized ? yellow : darkgrey}
              style={{ marginLeft: 5, width: 13, height: 13 }}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
        >
          <Link href={"/privacy"}>
            <RouteButton style={{ height: 20 }}>Privacy Policy</RouteButton>
          </Link>
        </div>
      </Footer>
    </Block>
  );
};

export default SideBarComponent;
