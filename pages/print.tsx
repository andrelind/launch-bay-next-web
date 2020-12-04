import { exportAsQR } from "lbn-core/dist/helpers/import+export";
import { deserialize } from "lbn-core/dist/helpers/serializer";
import { loadSquadron } from "lbn-core/dist/helpers/unit";
import { Ship, SlotKey, Squadron } from "lbn-core/dist/types";
import { NextPage } from "next";
import QRCode from "qrcode.react";
import React from "react";
import Logo from "../components/logo";

type Props = {
  squadron?: Squadron;
};

const PrintPage: NextPage<Props> = ({ squadron }) => {
  if (!squadron) {
    return <div />;
  }

  const threshold = (ship: Ship) => {
    const shields = ship.stats.filter((s) => s.type === "shields")[0]
      ? ship.stats.filter((s) => s.type === "shields")[0].value
      : 0;

    const hull = ship.stats.filter((s) => s.type === "hull")[0]
      ? ship.stats.filter((s) => s.type === "hull")[0].value
      : 0;

    return Math.ceil((shields + hull) * 0.5);
  };

  const lbx = exportAsQR(squadron);

  return (
    <div className="bg-white">
      <div className="flex flex-1 justify-between items-center m-3">
        <Logo />
        <div className="flex flex-col items-center font-medium text-md">
          <div>
            {squadron.name} [{squadron.format}]
          </div>
          <div>{squadron.cost} points</div>
        </div>
        <QRCode
          value={`https://launchbaynext.app/?lbx=${lbx}`}
          renderAs="svg"
          size={92}
        />
      </div>
      {squadron.ships.map((s) => (
        <div
          className="block"
          style={{
            pageBreakAfter: "auto",
            pageBreakBefore: "auto",
            pageBreakInside: "avoid",
          }}
          key={s.uid}
        >
          <div className="flex flex-1 items-center justify-between bg-gray-200 mx-3 p-1 text-xs font-medium">
            <span>{s.pilot.name.en}</span>
            <span>
              <span className="mr-2">
                Half points: {Math.ceil(s.pointsWithUpgrades / 2)}
              </span>
              <span className="mr-2">Threshold: {threshold(s)}</span>
              <span>Total: {s.pointsWithUpgrades}</span>
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3 m-2">
            {s.upgrades &&
              Object.keys(s.upgrades).map((key) => {
                const upgrades = s.upgrades?.[key as SlotKey];
                if (!upgrades) {
                  return;
                }

                return upgrades.map((u) => (
                  <div key={u.xws} className="col-span-1 m-1 text-xs font-400">
                    {u.sides[0].title.en}
                  </div>
                ));
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

PrintPage.getInitialProps = (ctx: any) => {
  const { lbx } = ctx.query;
  if (lbx) {
    const xws = deserialize(lbx);
    const squadron = loadSquadron(xws);
    return { squadron };
  }

  return {};
};

export default PrintPage;
