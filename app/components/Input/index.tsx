"use client";

import React from "react";

interface InputProp {
  withDollarSign: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  withDollarSign,
  value,
  onChange,
}: InputProp): JSX.Element => {
  return (
    <div className="relative rounded-md shadow-sm text-2xl font-mono">
      {withDollarSign && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500">$</span>
        </div>
      )}
      <input
        className={`outline-none bg-slate text-right text-blue-900 p-3 font-semibold border border-2 border-slate-500 block w-full rounded-md hover:border-teal placeholder:text-gray-400`}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
