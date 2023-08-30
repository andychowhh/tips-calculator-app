"use client";

import { useState } from "react";
import { Input, TipsPercentageButton, Result } from "app/components";
import { calculateTipAmount } from "app/utils";

export default function Home() {
  const [billAmount, setBillAmount] = useState<string>("");
  const [isTipCustomized, setIsTipCustomized] = useState<boolean>(false);
  const [selectedTipPercentage, setSelectedTipPercentage] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");

  const onTipPercentageButtonClicked = (
    amount: number,
    isCustomized: boolean
  ): void => {
    setSelectedTipPercentage(amount || 0);
    isCustomized ? setIsTipCustomized(true) : setIsTipCustomized(false);
  };

  return (
    <main className="flex flex-col justify-between min-h-screen bg-white font-mono text-cyan p-5">
      <div className="">
        <span className="">Bill</span>
        <Input
          value={billAmount}
          onChange={(e) => {
            const amount = e.target.value;
            if (amount === "" || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
              setBillAmount(e.target.value);
            }
          }}
        />
      </div>
      <div className="">
        <span>Select Tip %</span>
        <div className="grid grid-cols-2 justify-between gap-3">
          <TipsPercentageButton
            value="5"
            isCustomized={false}
            isSelected={!isTipCustomized && selectedTipPercentage === 5}
            onClick={() => onTipPercentageButtonClicked(5, false)}
          />
          <TipsPercentageButton
            value="10"
            isCustomized={false}
            isSelected={!isTipCustomized && selectedTipPercentage === 10}
            onClick={() => onTipPercentageButtonClicked(10, false)}
          />
          <TipsPercentageButton
            value="15"
            isCustomized={false}
            isSelected={!isTipCustomized && selectedTipPercentage === 15}
            onClick={() => onTipPercentageButtonClicked(15, false)}
          />
          <TipsPercentageButton
            value="25"
            isCustomized={false}
            isSelected={!isTipCustomized && selectedTipPercentage === 25}
            onClick={() => onTipPercentageButtonClicked(25, false)}
          />
          <TipsPercentageButton
            value="50"
            isCustomized={false}
            isSelected={!isTipCustomized && selectedTipPercentage === 50}
            onClick={() => onTipPercentageButtonClicked(50, false)}
          />
          <TipsPercentageButton
            isCustomized={true}
            isSelected={false}
            value={
              isTipCustomized ? selectedTipPercentage.toString() : undefined
            }
            onClick={(val) => {
              onTipPercentageButtonClicked(parseFloat(val ?? "") ?? 0, true);
            }}
          />
        </div>
      </div>
      <div className="">
        <span>Number of People</span>
        <Input
          value={numberOfPeople}
          onChange={(e) => {
            const newValue = e.target.value;
            const regex = /^[0-9]*$/;

            if (regex.test(newValue) || newValue === "") {
              setNumberOfPeople(newValue);
            }
          }}
        />
      </div>
      <Result
        tipAmountPerPerson={calculateTipAmount(
          parseFloat(billAmount),
          parseInt(numberOfPeople),
          selectedTipPercentage
        )}
        totalAmountPerPerson={0}
        onResetClicked={() => null}
      />
    </main>
  );
}
