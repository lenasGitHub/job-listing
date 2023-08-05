import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Jobs from './pages/jobs';
import Job from './pages/job';
import Layout from './components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Jobs />} />
              <Route path="/job/:slug" element={<Job />} />
              <Route path="*" element={<h1 />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
