import React from "react";

interface InputProp {
  icon?: string;
  value: number;
  onChange: () => void;
}

export const Input = (): JSX.Element => {
  return (
    <div className="max-w-screen-sm relative rounded-md shadow-sm text-2xl font-mono">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500">$</span>
      </div>
      <input
        className="bg-slate-200 text-right text-blue-900 p-3 font-semibold block w-full rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500" placeholder="0.00"
        id="password"
      />
    </div>
  );
};
