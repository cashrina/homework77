export interface Comments {
  id: string;
  author: string | null,
  description: string,
}

export interface CommentsMutation {
  author: string | null;
  description: string;
  image: string | null;
}