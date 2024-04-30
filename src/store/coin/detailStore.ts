import { VsCurrencyMap } from '@/constants/coin/common';
import { VsCurrencyType } from '@/types/coin/common';
import { create } from 'zustand';

interface DetailStoreType {
  priceCurrency: VsCurrencyType;
  setPriceCurrency: (priceCurrency: VsCurrencyType) => void;
}

const useDetailStore = create<DetailStoreType>((set) => ({
  priceCurrency: VsCurrencyMap.KRW,
  setPriceCurrency: (priceCurrency) => set(() => ({ priceCurrency })),
}));

export default useDetailStore;
