export interface Project {
  [ColumnKeys.S_NO]: number;
  [ColumnKeys.PERCENTAGE_FUNDED]: number;
  [ColumnKeys.AMOUNT_PLEDGED]: number;
}

export enum ColumnKeys {
  S_NO = "s.no",
  PERCENTAGE_FUNDED = "percentage.funded",
  AMOUNT_PLEDGED = "amt.pledged",
}
