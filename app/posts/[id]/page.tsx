import { db } from "@/src/database";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDistance, formatDistanceToNow, formatISO } from "date-fns";
import NextLink from "next/link";
import { CommentForm } from "./CommentForm";
import { Fragment } from "react";

const fetchPostWithComments = async (id: number) => {
  const postPromise = db
    .selectFrom("posts")
    .where("posts.id", "=", id)
    .select(["posts.id", "posts.body", "posts.createdAt"])
    .leftJoin("comments", "posts.id", "comments.postId")
    .select(({ fn }) => [fn.count<number>("comments.id").as("commentCount")])
    .groupBy("posts.id")
    .executeTakeFirstOrThrow();

  const commentsPromise = db
    .selectFrom("comments")
    .where("comments.postId", "=", id)
    .select(["comments.id", "comments.body", "comments.createdAt"])
    .orderBy("comments.id asc")
    .limit(10)
    .execute();

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  return { post, comments };
};

type Props = {
  params: { id: number };
};
export default async function Page({ params }: Props) {
  const { post, comments } = await fetchPostWithComments(params.id);
  return (
    <Stack spacing={4} direction="column">
      <Heading>
        <NextLink href="/">&lt;</NextLink>
        Post
      </Heading>
      {/* post */}
      <Card>
        <CardBody>
          <Text>{post.body}</Text>
        </CardBody>
        <CardFooter>
          <Stack spacing={2} direction="row">
            <Text>{formatISO(post.createdAt)}</Text>
            <Text>
              <span title="コメント数">💬</span> {post.commentCount}
            </Text>
          </Stack>
        </CardFooter>
      </Card>

      {/* form */}
      <CommentForm postId={post.id} />

      {/* comments */}
      <Stack spacing={2} direction="column" px={4}>
        {comments.map((comment, i) => (
          <Fragment key={comment.id}>
            {i !== 0 && <Divider />}
            <Box key={comment.id}>
              <Text>{comment.body}</Text>
              <Text>{formatDistance(comment.createdAt, new Date())} ago</Text>
            </Box>
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
}
