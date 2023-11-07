import { nodeToCursor } from "../../../cursor";
import type { CommentConnectionResolvers } from "./../../types.generated";
export const CommentConnection: CommentConnectionResolvers = {
  /* Implement CommentConnection resolver logic here */
  edges: (parent) => {
    return parent.comments.map((comment) => ({
      node: comment,
      cursor: nodeToCursor(comment),
    }));
  },
  pageInfo: (parent) => {
    return {
      endCursor: nodeToCursor(parent.comments.at(-1)),
      hasNextPage: parent.hasNextPage,
    };
  },
};
