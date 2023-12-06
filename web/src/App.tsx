import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { Direction, PaletteOptions, Theme, ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './components/Layout';
import LazyProgress from './components/LazyProgress';
import { RootState } from './store/store';
import { DIRECTIONS } from './utils/common';

const News = lazy(() => import('./pages/News'));

const App = () => {
  const palette: PaletteOptions = useSelector((state: RootState) => state.theme.palette);
  const isRTL: boolean = useSelector((state: RootState) => state.theme.isRTL);

  const appTheme: Theme = createTheme({
    palette,
    direction: isRTL ? (DIRECTIONS.RTL_MODE as Direction) : (DIRECTIONS.LTR_MODE as Direction),
  });

  const cacheRTL: EmotionCache = createCache({
    key: 'muirtl',
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [prefixer],
  });

  const routes = (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={appTheme}>
        <div dir={isRTL ? DIRECTIONS.RTL_MODE : DIRECTIONS.LTR_MODE}>
          <CssBaseline />
          <Layout>
            <Suspense fallback={<LazyProgress />}>{routes}</Suspense>
          </Layout>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
