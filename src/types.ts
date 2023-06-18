export enum ACCOUNT_TYPE {
  ADDITION = "Addition",
  SUBTRACTION = "sUBTRACTION",
  DIVISION = "DIVISION",
  MULTIPLICATION = "MULTIPLICATION",
}

export type TAccount = {
  firstNumber: number;
  secondNumber: number;
  type: ACCOUNT_TYPE;
};
