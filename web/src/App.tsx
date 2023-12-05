import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from './components/Layout';
import LazyProgress from './components/LazyProgress';

const News = lazy(() => import('./pages/News'));

const routes = (
  <Routes>
    <Route path="/" element={<News />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<LazyProgress />}>{routes}</Suspense>
      </Layout>
    </>
  );
};

export default App;
