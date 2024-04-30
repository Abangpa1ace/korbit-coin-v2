import BookmarkStarButton from '@/components/coin/BookmarkStarButton';
import DetailCurrencySelect from '@/components/coin/detail/DetailHeader/DetailCurrencySelect';
import useGetCoinDetail from '@/hooks/apis/useGetCoinDetail';
import styled from '@emotion/styled';

function DetailHeader(): JSX.Element {
  const { data } = useGetCoinDetail();

  return (
    <Header>
      <BookmarkStarButton id={data.id} />
      <CoinLogo src={data.image.thumb} alt={`coin_logo_${data.id}`} />
      <Title>
        {data.localization.ko}({data.symbol.toUpperCase()})
      </Title>
      <DetailCurrencySelect />
    </Header>
  );
}

export default DetailHeader;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
`;

const CoinLogo = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 8px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;
