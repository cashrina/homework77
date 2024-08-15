import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Grid, styled } from '@mui/material';
import { API_URL } from '../../constants.ts';

const ImageCardMedia = styled(CardMedia)({
  height: 0, paddingTop: '56,25%'
});

interface Props {
   author: string | null;
  description: string;
  image: string | null;
}

const CommentsItem: React.FC<Props> = ({author, description, image}) => {
  let cardImage = '';
  let authorName = 'Anonymous';

  if (author) {
    authorName = `${API_URL}/${author}`;
  }

  if (image) {
    cardImage = `${API_URL}/${image}`;
  }
  return (
    <Grid item sx={{width: '300px'}}>
      <Card sx={{height: '100%'}}>
        <CardHeader author={authorName}/>
        <ImageCardMedia image={cardImage}></ImageCardMedia>
        <CardContent>
          <strong>
           {description}
          </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommentsItem;