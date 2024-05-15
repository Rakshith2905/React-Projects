import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import NavNews from './components/NavNews.jsx';
import NewsContent from './components/newsContent/NewsContent.jsx';
import axios from 'axios';
import Footer from './components/footer/Footer.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [category, setCategory] = useState('general');
  const [loadMore, setLoadMore] = useState(10);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // applying the primary and secondary theme colors
  const darkTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: toggleDarkMode ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#131052',
          },
        },
      }),
    [toggleDarkMode]
  );

  const newsApi = async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadMore]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <NavNews
          setCategory={setCategory}
          toggleDarkMode={toggleDarkMode}
          setToggleDarkMode={setToggleDarkMode}
          darkTheme={darkTheme}
        />
        {isLoading ? (
          <p className="loading">
            <CircularProgress color="primary" />
          </p>
        ) : (
          <>
            <NewsContent
              loadMore={loadMore}
              setLoadMore={setLoadMore}
              newsArray={newsArray}
              newsResults={newsResults}
            />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
