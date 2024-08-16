import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Comments, CommentsMutation} from './types';

const filename = './db.json';
let data: Comments[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: CommentsMutation) {
    const id = crypto.randomUUID();
    const comment = {id, ...item};
    data.push(comment);
    await this.save();
    return comment;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDb;
