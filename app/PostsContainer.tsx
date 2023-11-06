import { db } from "@/src/database";
import { Posts } from "./Posts";
import { Button, Input, Stack } from "@chakra-ui/react";
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

export const PostsContainer = async () => {
  const posts = await fetchPosts();
  return (
    <Stack spacing={4} direction="column">
      <form action={createPost}>
        <Stack spacing={2} direction="row">
          <Input
            name="body"
            placeholder="Your text goes here"
            required
            autoComplete="off"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
};
