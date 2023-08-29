"use client";

import React from "react";

interface TipsPercentageButtonProp {
  value?: string;
  isCustomized: boolean;
  isSelected: boolean;
  onClick: (e?: string) => void;
}

export const TipsPercentageButton = ({
  value,
  onClick,
  isSelected = false,
  isCustomized = false,
}: TipsPercentageButtonProp): JSX.Element => {
  const sharedClass =
    "px-5 py-1 box-content font-mono text-2xl text-center rounded";
  return isCustomized ? (
    <input
      type="text"
      placeholder="Custom"
      value={value}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = "Custom")}
      onChange={(e) => onClick(e.target.value)}
      className={
        sharedClass +
        " bg-slate text-cyan placeholder:text-cyan hover:outline-teal hover:outline hover:outline-2 hover:text-cyan"
      }
    />
  ) : (
    <button
      className={
        sharedClass +
        " bg-cyan text-white placeholder:text-cyan hover:bg-lightTeal hover:text-cyan" +
        (isSelected ? " bg-teal !text-cyan" : "")
      }
      onClick={() => onClick()}
    >
      {value}%
    </button>
  );
};
