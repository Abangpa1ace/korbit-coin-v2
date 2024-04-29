import { ListTabLabelMap, ListTabMap } from "@/constants/coin/list";
import { ListTabType } from "@/types/coin/list";

import { Entries } from "@/types/utility";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const TAB = 'tab'

const useListTab = () => {
  const [searchParams, setSearchParams] = useSearchParams(ListTabMap.QUOTES);
  const activeTab = searchParams.get(TAB) as ListTabType;
  const tabs = Object.entries(ListTabLabelMap) as Entries<typeof ListTabLabelMap>;

  const handleChangeTab = (nextTab: ListTabType) => {
    if (nextTab === activeTab) return;

    setSearchParams({ [TAB]: nextTab });
  }

  useEffect(() => {
    if (!activeTab) handleChangeTab('QUOTES');
  }, [activeTab])

  return {
    tabs,
    activeTab,
    handleChangeTab,
  }
}

export default useListTab;