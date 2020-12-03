import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "lbn-core/dist/assets/colors";
import React from "react";
import { Stat } from "../../types";
import { Block, Icon, Text, Wrapper } from "./styles";

type Props = {
  initiative?: number;
  engagement?: number;
  stats?: Stat[];
  force?: { value: number; recovers: number };
  charges?: { value: number; recovers: number };
  minimized: boolean;
};

export const colorForType = (type: string) => {
  switch (type) {
    case "attack":
      return red;
    case "agility":
      return green;
    case "hull":
      return yellow;
    case "initiative":
      return orange;
    case "shields":
      return blue;
    case "Force Power":
      return purple;
    case "charge":
      return yellow;
    case "energy":
      return pink;

    default:
      break;
  }
};

const renderValue = (
  data: { value: number; recovers?: number },
  type: string,
  minimized: boolean
) => {
  const recovers = new Array(data.recovers || 0).fill(0);
  const color = colorForType(type);
  return (
    data && (
      <Wrapper key={`${type}_${data.value}`}>
        <Block minimized={minimized}>
          <Icon minimized={minimized} icon={type} color={color} />
          {recovers.length > 0 && (
            <div
              style={{
                position: "absolute",
                right: -4,
                top: -2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {recovers.map((_, i) => (
                <Icon
                  key={`${type}_${data.value}_${i}`}
                  icon="recurring"
                  color={color}
                />
              ))}
            </div>
          )}
        </Block>
        <Text minimized={minimized} style={{ color }}>{`${data.value}`}</Text>
      </Wrapper>
    )
  );
};

const ShipStats = ({
  initiative,
  engagement,
  stats,
  force,
  charges,
  minimized,
}: Props) => (
  <Block minimized={minimized}>
    {initiative !== undefined && (
      <Text
        minimized={minimized}
        style={{
          color: colorForType("initiative"),
        }}
      >
        {initiative}
        {engagement !== undefined && (
          <Text style={{ fontSize: 12 }}>
            {" / "}
            {engagement}
          </Text>
        )}
      </Text>
    )}

    {stats &&
      stats.map((stat) => {
        if (stat.type === "attack" && stat.arc) {
          return (
            <Wrapper key={`${stat.type}_${stat.value}_${stat.arc || ""}`}>
              <Icon minimized={minimized} icon={stat.arc} color={red} />
              <Text
                minimized={minimized}
                style={{ color: red }}
              >{`${stat.value}`}</Text>
            </Wrapper>
          );
        }
        return renderValue(stat, stat.type, minimized);
      })}

    {charges && renderValue(charges, "charge", minimized)}
    {force && renderValue(force, "Force Power", minimized)}
  </Block>
);

export default ShipStats;
