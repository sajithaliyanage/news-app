import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteOptions, Theme, ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './components/Layout';
import LazyProgress from './components/LazyProgress';
import { RootState } from './store/store';

const News = lazy(() => import('./pages/News'));

const App = () => {
  const palette: PaletteOptions = useSelector((state: RootState) => state.theme.palette);

  const appTheme: Theme = createTheme({
    palette,
  });

  const routes = (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<LazyProgress />}>{routes}</Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
