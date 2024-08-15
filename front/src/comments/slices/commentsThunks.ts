import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentsMutation } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';

export const fetchComments = createAsyncThunk<Comment[]>(
  'comments/fetchAll',
  async () => {
    const {data: comments} = await axiosApi.get<Comment[]>('/comments');
    return comments;
  }
);

export const createComment = createAsyncThunk<void, CommentsMutation>(
  'comments/create',
  async (commentMutation) => {
    const formData = new FormData();
    if (commentMutation.author) {
      formData.append('author', commentMutation.author);
    }
    formData.append('description', commentMutation.description);
    if (commentMutation.image) {
      formData.append('image', commentMutation.image);
    }
    await axiosApi.post('/comments', formData);
  }
);

export const fetchOneComment = createAsyncThunk<Comment, string>(
  'comments/fetchOne',
  async (id) => {
    const {data: comments} = await axiosApi.get<Comment>(`/comments/${id}`);
    return comments;
  }
);