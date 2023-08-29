"use client";

import { Input, TipsPercentageButton, Result } from "app/components";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-white font-mono text-cyan p-5">
      <div className="">
        <span className="">Bill</span>
        <Input value={0} onChange={() => null} />
      </div>
      <div className="">
        <span>Select Tip %</span>
        <div className="grid grid-cols-2 justify-between gap-3">
          <TipsPercentageButton
            value="5"
            isCustomized={false}
            onClick={() => null}
          />
          <TipsPercentageButton
            value="10"
            isCustomized={false}
            onClick={() => null}
          />
          <TipsPercentageButton
            value="15"
            isCustomized={false}
            onClick={() => null}
          />
          <TipsPercentageButton
            value="25"
            isCustomized={false}
            onClick={() => null}
          />
          <TipsPercentageButton
            value="50"
            isCustomized={false}
            onClick={() => null}
          />
          <TipsPercentageButton isCustomized={true} onClick={() => null} />
        </div>
      </div>
      <div className="">
        <span>Number of People</span>
        <Input value={0} onChange={() => null} />
      </div>
      <Result
        tipAmountPerPerson={0}
        totalAmountPerPerson={0}
        onResetClicked={() => null}
      />
    </main>
  );
}
