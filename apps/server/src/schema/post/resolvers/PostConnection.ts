import { nodeToCursor } from "../../../cursor";
import type { PostConnectionResolvers } from "./../../types.generated";
export const PostConnection: PostConnectionResolvers = {
  /* Implement PostConnection resolver logic here */
  edges: (parent) => {
    return parent.posts.map((post) => ({
      node: post,
      cursor: nodeToCursor(post),
    }));
  },
  pageInfo: (parent) => {
    return {
      endCursor: nodeToCursor(parent.posts.at(-1)),
      hasNextPage: parent.hasNextPage,
    };
  },
};
