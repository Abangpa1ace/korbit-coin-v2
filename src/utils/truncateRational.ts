type TruncateType = 'ceil' | 'round' | 'floor';

interface Params {
  type: TruncateType;
  value: number | undefined | null;
  remainCount: number;
}

export default function truncateRational({ type, value, remainCount }: Params) {
  if (!value) return 0;
  return (Math[type](value * 10 ** remainCount) / 10 ** remainCount).toFixed(remainCount);
}