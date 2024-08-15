import { Comments } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { createComment, fetchComments } from './commentsThunks.ts';

export interface CommentState {
  items: Comments[];
  comment: Comments | null;
  itemsFetching: boolean;
  oneFetching: boolean;
  isCreating: boolean;
}

const initialState: CommentState = {
  items: [],
  comment: null,
  itemsFetching: false,
  isCreating: false,
  oneFetching: false,
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

    // builder.addCase(fetchOneComment.pending, (state) => {
    //   state.comment = null;
    //   state.oneFetching = true;
    // }).addCase(fetchOneComment.fulfilled, (state, {payload: comment}) => {
    //   state.comment = comment;
    //   state.oneFetching = false;
    // }).addCase(fetchOneComment.rejected, (state) => {
    //   state.oneFetching = false;
    // });
  },
  selectors: {
    selectComments: (state) => state.items,
    selectCommentsFetching: (state) => state.itemsFetching,
    selectCommentCreating: (state) => state.isCreating,
    selectOneComment: (state) => state.comment,
    selectOneCommentFetching: (state) => state.oneFetching,
  }
});

export const commentsReducer = commentsSlice.reducer;

export const {
  selectComments,
  selectCommentsFetching,
  selectCommentCreating,
  selectOneComment,
  selectOneCommentFetching,
} = commentsSlice.selectors;