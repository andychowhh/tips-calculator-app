import React from "react";

interface InputProp {
  icon?: string;
  value: number;
  onChange: () => void;
}

export const Input = ({ value, onChange }: InputProp): JSX.Element => {
  return (
    <div className="max-w-screen-sm relative rounded-md shadow-sm text-2xl font-mono">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500">$</span>
      </div>
      <input
        className={`bg-slate-200 text-right text-blue-900 p-3 font-semibold block w-full rounded-md  placeholder:text-gray-400`}
        placeholder="0.00"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
