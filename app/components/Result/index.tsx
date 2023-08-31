'use client'

import React from "react";

interface AmountBlock {
  field: string;
  amount: number;
}

const AmountBlock = ({ field, amount = 0 }: AmountBlock): JSX.Element => {
  return (
    <div className="flex justify-between mb-10">
      <div className="flex flex-col justify-items-start text-start">
        <div className="text-white">{field}</div>
        <div className="text-zinc-400">/ person</div>
      </div>
      <div className="text-teal text-4xl font-bold">
        ${Number(amount.toString()).toFixed(2)}
      </div>
    </div>
  );
};

interface ResultProp {
  tipAmountPerPerson: number;
  totalAmountPerPerson: number;
  onResetClicked: () => void;
}

export const Result = ({
  tipAmountPerPerson,
  totalAmountPerPerson,
  onResetClicked,
}: ResultProp): JSX.Element => {
  return (
    <div className="bg-cyan px-8 py-9 font-mono text-center rounded flex-1">
      <AmountBlock field="Tip Amount" amount={tipAmountPerPerson} />
      <AmountBlock field="Total" amount={totalAmountPerPerson} />
      <button
        className="bg-teal text-cyan text-center text-xl font-semibold rounded w-full py-4 hover:bg-lightTeal"
        onClick={onResetClicked}
      >
        RESET
      </button>
    </div>
  );
};
