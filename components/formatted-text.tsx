import textHelper from "lbn-core/dist/helpers/text";
import React, { FC } from "react";
import XwingFont from "./fonts/xwing";

type Props = {
  text: string;
  color?: string;
  fontStyle?: "italic" | "normal";
};

export const FormattedText: FC<Props> = ({ text, color, fontStyle }) => {
  const content = textHelper(text);

  return (
    <span
      className={`text-xs sm:text-sm font-normal pt-1 mr-1 ${
        fontStyle === "italic" && "italic"
      }`}
      style={{ color }}
    >
      {content.map((item, index) => {
        switch (item.type) {
          case "text":
            return item.text;
          case "strong":
            return (
              <span
                key={item.type + "_" + index}
                style={{ fontWeight: "bold" }}
              >
                {item.text}
              </span>
            );
          case "icon": {
            return (
              <XwingFont
                key={item.type + "_" + index}
                icon={item.text}
                className="mx-1"
              />
            );
          }
        }
      })}
    </span>
  );
};

export default FormattedText;
