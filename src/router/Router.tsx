import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ListPage = lazy(() => import('../pages/List'));
const DetailPage = lazy(() => import('../pages/Detail'));

export default function Router() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:coinId" element={<DetailPage />} />
      </Routes>
    </Suspense>
  );
}
