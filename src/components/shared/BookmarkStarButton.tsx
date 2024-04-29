import { IoStar } from 'react-icons/io5';
import styled from '@emotion/styled';
import { themeColor } from '@/themes/variable';
import { useRef, useState } from 'react';
import { keyframes } from '@emotion/react';
import useBookmarkStore from '@/store/coin/bookmarkStore';
import { shallow } from 'zustand/shallow';

const OFFSET = 1500;

interface Props {
  id: string;
}

function BookmarkStarButton({ id }: Props): JSX.Element {
  const { isBookmarked, toggleBookmark } = useBookmarkStore(
    ({ isBookmarked, toggleBookmark }) => ({ isBookmarked, toggleBookmark }),
    shallow,
  );
  const isActive = isBookmarked(id);
  const timerRef = useRef<number>();
  const [isShowToast, setIsShowToast] = useState<'add' | 'remove' | undefined>(undefined);

  const handleClickButton = async () => {
    toggleBookmark(id);

    if (timerRef.current) clearTimeout(timerRef.current);

    setIsShowToast(isActive ? 'remove' : 'add');
    timerRef.current = setTimeout(() => setIsShowToast(undefined), OFFSET);
  };

  return (
    <Container key={id}>
      <StarButton isActive={isActive} size={18} onClick={handleClickButton} />
      {isShowToast === 'add' && <ToastMessage>북마크가 설정되었습니다.</ToastMessage>}
      {isShowToast === 'remove' && <ToastMessage>북마크가 해제되었습니다.</ToastMessage>}
    </Container>
  );
}

export default BookmarkStarButton;

const Container = styled.span`
  position: relative;
`;

const StarButton = styled(IoStar)<{ isActive: boolean }>`
  fill: ${({ isActive }) => (isActive ? themeColor.yellow200 : themeColor.gray400)};
  cursor: pointer;
`;

const toastAnimation = keyframes`
  0%, 100% {
    visibility: hidden;
    opacity: 0;
  }
  10%, 90% {
    visibility: visible;
    opacity: 1;
  }
`;

const ToastMessage = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(100%, 100%);
  padding: 10px 12px;
  width: max-content;
  background-color: ${themeColor.navy100};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  z-index: 1;
  animation: ${toastAnimation} ${`${OFFSET / 1000}s`} ease-in-out;
`;
