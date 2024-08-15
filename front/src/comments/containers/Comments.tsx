import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectComments } from '../slices/commentsSlice.ts';
import { useEffect } from 'react';
import { fetchComments } from '../slices/commentsThunks.ts';
import { Grid, Typography } from '@mui/material';
import CommentsItem from './CommentsItem.tsx';

const Comments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2} marginTop={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Comments</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {comments.map((comment) => (
          <CommentsItem
            key={comment.id}
            author={comment.author}
            description={comment.description}
            image={comment.image}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;