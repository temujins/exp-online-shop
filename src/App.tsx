import { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './globalStyles';
import { Home } from './pages';

export default function App(): ReactElement {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<h1>hello world</h1>} />
          <Route path='/shops' element={<h1>hello world</h1>} />
          <Route path='/products' element={<h1>hello world</h1>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
