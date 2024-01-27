"use client";

import { ChangeEvent, useReducer } from "react";
import { Input, TipsPercentageButton, Result } from "app/components";
import { calculateTipAmount, calculateTotalAmountAmount } from "app/utils";

enum HomeActionType {
  SELECT_TIP_PERCENTAGE,
  UPDATE_BILL_AMOUNT,
  UPDATE_NUMBER_OF_PEOPLE,
  RESET_ALL,
}

interface HomeState {
  billAmount: string;
  isTipCustomized: boolean;
  selectedTipPercentage: string;
  customizedTipPercentage: string;
  numberOfPeople: string;
}

interface HomeAction {
  type: HomeActionType;
  payload?: {
    billAmount?: string;
    tipPercentage?: number;
    numberOfPeople?: string;
  };
}

const initialState: HomeState = {
  billAmount: "",
  isTipCustomized: false,
  selectedTipPercentage: "",
  customizedTipPercentage: "",
  numberOfPeople: "",
};

function reducer(state: HomeState, action: HomeAction) {
  const { type, payload } = action;
  switch (type) {
    case HomeActionType.UPDATE_BILL_AMOUNT:
      return {
        ...state,
        billAmount: payload?.billAmount ?? "",
      };
    case HomeActionType.SELECT_TIP_PERCENTAGE:
      return {
        ...state,
        customizedTipPercentage: "",
        selectedTipPercentage: (payload?.tipPercentage || 0).toString(),
      };
    case HomeActionType.UPDATE_NUMBER_OF_PEOPLE:
      return {
        ...state,
        numberOfPeople: payload?.numberOfPeople ?? "",
      };
    case HomeActionType.RESET_ALL:
      return initialState;
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    billAmount,
    isTipCustomized,
    selectedTipPercentage,
    customizedTipPercentage,
    numberOfPeople,
  } = state;

  const tipAmountPerPerson = calculateTipAmount(
    parseFloat(billAmount),
    parseInt(numberOfPeople),
    parseInt(selectedTipPercentage)
  );

  const totalAmountPerPerson = calculateTotalAmountAmount(
    parseFloat(billAmount),
    parseInt(numberOfPeople),
    parseInt(selectedTipPercentage)
  );

  const onTipPercentageButtonClicked = (
    amount: number,
    isCustomized: boolean
  ): void => {
    dispatch({
      type: HomeActionType.SELECT_TIP_PERCENTAGE,
      payload: { tipPercentage: amount },
    });
  };

  const onBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const amount = e.target.value;
    if (amount === "" || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
      dispatch({
        type: HomeActionType.UPDATE_BILL_AMOUNT,
        payload: { billAmount: amount },
      });
    }
  };

  const onNumberOfPeopleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(newValue) || newValue === "") {
      dispatch({
        type: HomeActionType.UPDATE_NUMBER_OF_PEOPLE,
        payload: { numberOfPeople: newValue },
      });
    }
  };

  const onResetClicked = (): void => {
    dispatch({ type: HomeActionType.RESET_ALL });
  };

  return (
    <main className="flex flex-col justify-between max-w-5xl min-h-screen bg-white font-mono text-cyan p-5 m-auto md:flex-row md:w-11/12 md:min-h-fit md:rounded md:py-8">
      <div className="flex flex-col justify-between flex-1">
        <div className="">
          <span className="">Bill</span>
          <Input
            withDollarSign={true}
            value={billAmount}
            onChange={onBillAmountChange}
          />
        </div>
        <div className="">
          <span>Select Tip %</span>
          <div className="grid grid-cols-2 justify-between gap-3 sm:grid-cols-3">
            <TipsPercentageButton
              value="5"
              isCustomized={false}
              isSelected={
                !isTipCustomized && parseInt(selectedTipPercentage) === 5
              }
              onClick={() => onTipPercentageButtonClicked(5, false)}
            />
            <TipsPercentageButton
              value="10"
              isCustomized={false}
              isSelected={
                !isTipCustomized && parseInt(selectedTipPercentage) === 10
              }
              onClick={() => onTipPercentageButtonClicked(10, false)}
            />
            <TipsPercentageButton
              value="15"
              isCustomized={false}
              isSelected={
                !isTipCustomized && parseInt(selectedTipPercentage) === 15
              }
              onClick={() => onTipPercentageButtonClicked(15, false)}
            />
            <TipsPercentageButton
              value="25"
              isCustomized={false}
              isSelected={
                !isTipCustomized && parseInt(selectedTipPercentage) === 25
              }
              onClick={() => onTipPercentageButtonClicked(25, false)}
            />
            <TipsPercentageButton
              value="50"
              isCustomized={false}
              isSelected={
                !isTipCustomized && parseInt(selectedTipPercentage) === 50
              }
              onClick={() => onTipPercentageButtonClicked(50, false)}
            />
            <TipsPercentageButton
              isCustomized={true}
              isSelected={isTipCustomized}
              value={customizedTipPercentage?.toString()}
              onClick={(val) => {
                onTipPercentageButtonClicked(parseFloat(val ?? "") ?? 0, true);
              }}
            />
          </div>
        </div>
        <div>
          <span>Number of People</span>
          <Input
            withDollarSign={false}
            value={numberOfPeople}
            onChange={onNumberOfPeopleChange}
          />
        </div>
      </div>
      <div className="mb-3 md:mb-0 md:mr-3"></div>
      <Result
        tipAmountPerPerson={tipAmountPerPerson}
        totalAmountPerPerson={totalAmountPerPerson}
        onResetClicked={onResetClicked}
      />
    </main>
  );
}
