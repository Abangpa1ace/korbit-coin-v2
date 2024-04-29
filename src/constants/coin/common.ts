import { VsCurrencyType } from "@/types/coin/common";

export const VsCurrencyMap = {
  KRW: 'krw',
  USD: 'usd',
} as const;

export const CurrencyUnit: Record<VsCurrencyType, string> = {
  [VsCurrencyMap.KRW]: '₩',
  [VsCurrencyMap.USD]: '$',
}