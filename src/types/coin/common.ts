import { VsCurrencyMap } from "@/constants/coin/common";

export type VsCurrencyType = typeof VsCurrencyMap[keyof typeof VsCurrencyMap];
