import { Comment } from "../types.generated";

export type CommentConnectionMapper = {
  comments: Comment[];
  hasNextPage: boolean;
};
