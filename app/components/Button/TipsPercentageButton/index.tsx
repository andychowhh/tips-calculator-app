import React from "react";

interface TipsPercentageButtonProp {
  value?: string;
  isCustomized: boolean;
  onClick: () => void;
}

export const TipsPercentageButton = ({
  value,
  onClick,
  isCustomized = false,
}: TipsPercentageButtonProp): JSX.Element => {
  const sharedClass =
    "w-24 px-5 py-1 box-content font-mono text-2xl text-center rounded";
  return isCustomized ? (
    <input
      placeholder="Custom"
      value={value ? `${value}%` : ""}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = "Custom")}
      onClick={onClick}
      className={
        sharedClass +
        " bg-slate text-cyan placeholder:text-cyan hover:outline-teal hover:outline hover:outline-2 hover:text-cyan"
      }
    />
  ) : (
    <button
      className={
        sharedClass +
        " bg-cyan text-white placeholder:text-cyan hover:bg-teal hover:text-cyan"
      }
      onClick={onClick}
    >
      {value}%
    </button>
  );
};
