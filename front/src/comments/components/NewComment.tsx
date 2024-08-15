import { CommentsMutation } from '../../types.ts';
import { Typography } from '@mui/material';
import NewCommentForm from './NewCommentForm.tsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { createComment } from '../slices/commentsThunks.ts';
import { selectCommentCreating } from '../slices/commentsSlice.ts';

const NewComment = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCommentCreating);

  const onFormSubmit = async (commentMutation: CommentsMutation) => {
    try {
      await dispatch(createComment(commentMutation));
    } catch (error) {
      console.error('Failed to create comment:', error);
    }
  };


  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>New comments</Typography>
      <NewCommentForm onSubmit={onFormSubmit} isLoading={isCreating} />
    </>
  );
};

export default NewComment;