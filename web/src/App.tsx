import CssBaseline from '@mui/material/CssBaseline';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import News from './pages/News';

let routes = (
  <Routes>
    <Route path='/' element={<News />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        {routes}
      </Layout>
    </>
  );
};

export default App;
