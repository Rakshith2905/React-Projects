import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './NewsContent.css';
import NewsCard from '../newsCard/NewsCard.jsx';

function NewsContent({ newsArray, newsResults, loadMore, setLoadMore }) {
  return (
    <Container maxWidth="md">
      <div className="content">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadMore <= newsResults && (
          <Button variant="outlined" onClick={() => setLoadMore(loadMore + 10)}>
            Load more
          </Button>
        )}
      </div>
    </Container>
  );
}

export default NewsContent;
