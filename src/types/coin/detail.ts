import { VsCurrencyType } from '@/types/coin/common';

type GlobalLocaleKey = 'ko' | 'en' | string;
type GlobalLocaleData = Record<GlobalLocaleKey, string>;

type GlobalCurrencyKey = VsCurrencyType | string;
type GlobalCurrencyData<V> = Record<GlobalCurrencyKey, V>;

export interface CoinDetailType {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: null;
  platforms: object;
  detail_platforms: object;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: null;
  additional_notices: unknown[];
  localization: GlobalLocaleData;
  description: GlobalLocaleData;
  links: {
    homepage: string[];
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: {
    current_price: GlobalCurrencyData<number>;
    total_value_locked: null;
    mcap_to_tvl_ratio: null;
    fdv_to_tvl_ratio: null;
    roi: null;
    ath: GlobalCurrencyData<number>;
    ath_change_percentage: GlobalCurrencyData<number>;
    ath_date: GlobalCurrencyData<string>;
    atl: GlobalCurrencyData<number>;
    atl_change_percentage: GlobalCurrencyData<number>;
    atl_date: GlobalCurrencyData<string>;
    market_cap: GlobalCurrencyData<number>;
    market_cap_rank: number;
    fully_diluted_valuation: GlobalCurrencyData<number>;
    market_cap_fdv_ratio: number;
    total_volume: GlobalCurrencyData<number>;
    high_24h: GlobalCurrencyData<number>;
    low_24h: GlobalCurrencyData<number>;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_1h_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_24h_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_7d_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_14d_in_currency: GlobalCurrencyData<number>;
    change_percentage_30d_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_60d_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_200d_in_currency: GlobalCurrencyData<number>;
    price_change_percentage_1y_in_currency: GlobalCurrencyData<number>;
    market_cap_change_24h_in_currency: GlobalCurrencyData<number>;
    market_cap_change_percentage_24h_in_currency: GlobalCurrencyData<number>;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };
  community_data: object;
  developer_data: object;
  status_updates: unknown[];
  last_updated: string;
  tickers: object[];
}
