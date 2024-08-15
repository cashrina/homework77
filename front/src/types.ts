export interface Comments {
    id: string;
    author: string | null,
    description: string,
    image: string | null;
}

export interface CommentsMutation {
    author: string | null;
    description: string;
    image: File | null;
}