import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import { ThemeProvider } from 'theme-ui';
import theme from './themes';
import { Route } from 'wouter';
import routes from './routes';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { DataProvider } from './data/DataLayer';

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
            <Route path={routes.home} component={Home}></Route>
        </ErrorBoundary>
      </ThemeProvider>
    </DataProvider>
  );
};

const rootElement = document.getElementById('app');

// It's being used an experimental version of React and the project has the requirements to use it.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.unstable_createRoot(rootElement, { hydrate: true }).render(<App />);
