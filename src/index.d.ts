import type { OptionsType } from './options/Options';
import type DateHelper from './helpers/DateHelper';

export type Template = {
  (dateHelper: DateHelper, options: OptionsType): TemplateResult;
};

export type SubDomain = {
  t: number;
  v?: number | null;
  x?: number;
  y?: number;
};

export type TemplateResult = {
  name: string;
  level: number;
  rowsCount: (ts: number) => number;
  columnsCount: (ts: number) => number;
  mapping: (
    startTimestamp: number,
    endTimestamp: number,
    defaultValues: any,
  ) => SubDomain[];
  format: {
    domainLabel: string;
  };
  extractUnit: (ts: number) => number;
};

export type Data = Record<number, Record<number, number[]>>;