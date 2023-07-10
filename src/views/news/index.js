import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';


const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a91e3d229204266b2424694517d1085'
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
<>
    <Card style={{height:'10vh' }}>
    <CardContent style={{ textAlign: 'center',backgroundColor: '#4A5859',height:'10vh' }}>
    <Typography variant="h4" component="h1" align="center" gutterBottom>
        News
      </Typography>
</CardContent>
</Card>
<Card>
<CardContent>
    <Container maxWidth="lg">
      
      <Grid container spacing={2}>
        {newsData.map((news) => (
          <Grid item key={news.url} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={news.urlToImage}
                
                alt={news.title}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {news.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {news.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </CardContent>
    </Card>
    </>
  );
};

export default NewsPage;
