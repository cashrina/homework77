import { Comments } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { createComment, fetchComments } from './commentsThunks.ts';

export interface CommentState {
  items: Comments[];
  comment: Comments | null;
  itemsFetching: boolean;
  isCreating: boolean;
}

const initialState: CommentState = {
  items: [],
  comment: null,
  itemsFetching: false,
  isCreating: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.itemsFetching = true;
    }).addCase(fetchComments.fulfilled, (state, {payload: comments}) => {
      state.itemsFetching = false;
      state.items = comments;
    }).addCase(fetchComments.rejected, (state) => {
      state.itemsFetching = false;
    });

    builder.addCase(createComment.pending, (state) => {
      state.isCreating = true;
    }).addCase(createComment.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createComment.rejected, (state) => {
      state.isCreating = false;
    });

  },
  selectors: {
    selectComments: (state) => state.items,
    selectCommentsFetching: (state) => state.itemsFetching,
    selectCommentCreating: (state) => state.isCreating,
    selectOneComment: (state) => state.comment,
  }
});

export const commentsReducer = commentsSlice.reducer;

export const {
  selectComments,
  selectCommentCreating,
} = commentsSlice.selectors;