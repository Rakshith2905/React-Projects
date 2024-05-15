import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './NewsCard.css';

function NewsCard({ newsItem }) {
  const options = {
    hourCycle: 'h12',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
  };
  const formattedTime = new Date(newsItem.publishedAt).toLocaleString(
    'en-US',
    options
  );
  // console.log(formattedTime);
  console.log(newsItem);

  return (
    <Card className="newsCard">
      <div className="imageWrapper">
        <CardMedia
          component="img"
          className="newsImage"
          alt={newsItem.title}
          image={newsItem.urlToImage ? newsItem.urlToImage : '/backup_img.png'}
        />
        <p className="sourceName">{newsItem.source.name}</p>
      </div>
      <div className="newsBody">
        <CardContent sx={{ p: 0 }}>
          <Typography className="newstitle" variant="h6" component="div">
            {newsItem.title}
          </Typography>
          <Typography
            className="newsAuthorText"
            variant="subtitle2"
            component="div"
            sx={{ display: 'inline' }}
          >
            <a href={newsItem.url} target="_blank">
              <strong>News</strong>
            </a>
            <span>
              {' '}
              by {newsItem.author ? newsItem.author : 'Unknown'} |{' '}
              {formattedTime}
            </span>
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            className="newsDesc"
            sx={{ marginTop: 1.5 }}
          >
            {newsItem.description
              ? newsItem.description
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis magna etiam tempor orci.'}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0 }}>
          <Link
            href={newsItem.url}
            target="_blank"
            className="readMore"
            underline="hover"
          >
            Read more
          </Link>
        </CardActions>
      </div>
    </Card>
  );
}

export default NewsCard;
