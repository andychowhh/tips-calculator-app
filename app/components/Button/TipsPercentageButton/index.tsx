import React from "react";

interface TipsPercentageButtonProp {
  value?: string | null;
  isCustomized: boolean;
  onClick: () => void;
}

export const TipsPercentageButton = ({
  value,
  onClick,
  isCustomized = false,
}: TipsPercentageButtonProp): JSX.Element => {
  return isCustomized ? (
    <input
      className="bg-slate font-mono text-2xl text-cyan text-center px-7 py-1 rounded hover:bg-teal hover:text-cyan"
      onClick={onClick}
      value={value ?? "Custom"}
    />
  ) : (
    <button
      className="font-mono text-2xl text-white box-content bg-cyan px-7 py-1 rounded hover:bg-teal hover:text-cyan"
      onClick={onClick}
    >
      {value}%
    </button>
  );
};
