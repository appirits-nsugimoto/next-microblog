import { db } from "@/src/database";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { Post } from "./Post";
import { createPost } from "./actions";

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .selectFrom("posts")
    .leftJoin("comments", "posts.id", "comments.postId")
    .select(["posts.id", "posts.body", "posts.createdAt"])
    .select(({ fn }) => [fn.count<number>("comments.id").as("commentCount")])
    .groupBy("posts.id")
    .orderBy("posts.id desc")
    .limit(10)
    .execute();
};

export const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <Stack spacing={4} direction="row" flexWrap="wrap">
      {posts.map((post) => (
        <Box key={post.id} width="fit-content" maxW="xs">
          <Post key={post.id} post={post} />
        </Box>
      ))}
    </Stack>
  );
};
