import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ListPage = lazy(() => import("../pages/List"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
    </Routes>
  );
}
