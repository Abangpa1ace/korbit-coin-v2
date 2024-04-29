import { VsCurrencyMap } from "@/constants/coin/list";

export type VsCurrencyType = typeof VsCurrencyMap[keyof typeof VsCurrencyMap];
