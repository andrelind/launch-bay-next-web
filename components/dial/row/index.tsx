import React from "react";
import { blue, red } from "../../../assets/colors";
import { Block, Dummy, Icon, Number } from "./styles";

const colorForValue = (value: string) => {
  switch (value) {
    case "B":
      return blue;
    case "R":
      return red;
  }
};

const iconForValue = (d: any) => {
  switch (d[1]) {
    case "T":
      return { index: 0, data: d[2] + "turnleft" };
    case "B":
      return { index: 1, data: d[2] + "bankleft" };
    case "F":
      return { index: 2, data: d[2] + "straight" };
    case "N":
      return { index: 3, data: d[2] + "bankright" };
    case "Y":
      return { index: 4, data: d[2] + "turnright" };
    case "O":
      return { index: 2, data: d[2] + "stop" };
    case "K":
      return { index: 5, data: d[2] + "kturn" };
    case "L":
      return { index: 6, data: d[2] + "sloopleft" };
    case "P":
      return { index: 7, data: d[2] + "sloopright" };
    case "E":
      return { index: 8, data: d[2] + "trollleft" };
    case "R":
      return { index: 9, data: d[2] + "trollright" };
    case "A":
      return { index: 10, data: d[2] + "reversebankleft" };
    case "S":
      return { index: 11, data: d[2] + "reversestraight" };
    case "D":
      return { index: 12, data: d[2] + "reversebankright" };
    default:
    // console.log('UNKNOWN MANUEVER', d[1]);
  }
};

type Props = {
  data: string[];
  row: string;
};

export const RowComponent = ({ data, row }: Props) => {
  const rowData = [
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
  ];
  data.forEach((d) => {
    const v = iconForValue(d);
    if (v) {
      rowData[v.index] = v.data;
    }
  });
  for (var i = rowData.length; i >= 5; i--) {
    if (rowData[i] === "D") {
      rowData.splice(i, 1);
    }
  }

  return (
    <Block>
      <Number>{row}</Number>
      {rowData.map((d, index) => {
        if (d === "D") {
          return <Dummy key={"row_value_" + index} />;
        } else {
          return (
            <Dummy key={"row_value_" + index}>
              <Icon color={colorForValue(d.slice(0, 1))} icon={d.slice(1)} />
            </Dummy>
          );
        }
      })}
    </Block>
  );
};

export default RowComponent;
