import express from 'express';
import fileDb from '../fileDb';
import { imagesUpload } from '../multer';
import { CommentsMutation } from '../types';

const commentsRouter = express.Router();

commentsRouter.get('/comments', async (_req, res) => {
  const comments = await fileDb.getItems();
  return res.send(comments);
});

commentsRouter.post('/comments', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.description) {
    return res.status(400).send({ error: 'Description is required!' });
  }

  const comment: CommentsMutation = {
    author: req.body.author ? req.body.author : null,
    description: req.body.description,
    image: req.file ? req.file.filename : null,
  };

  const savedComments = await fileDb.addItem(comment);
  return res.send(savedComments);
});

export default commentsRouter;

