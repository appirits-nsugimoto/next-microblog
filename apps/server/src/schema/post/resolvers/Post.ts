import DataLoader from "dataloader";
import { db } from "../../../database";
import type { PostResolvers } from "./../../types.generated";
export const Post: PostResolvers = {
  /* Implement Post resolver logic here */
  commentCount: (parent) => {
    return commentsCountLoader.load(parent.id);
  },
};

const commentsCountLoader = new DataLoader(
  async (postIds: readonly number[]) => {
    const comments = await db
      .selectFrom("comments")
      .select(({ fn }) => [
        "postId",
        fn.count<number>("comments.id").as("count"),
      ])
      .where("postId", "in", postIds)
      .groupBy("postId")
      .execute();
    return postIds.map((postId) => {
      const c = comments.find((c) => c.postId === postId);
      return c?.count ?? 0;
    });
  },
);
