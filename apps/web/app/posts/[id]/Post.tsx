import { graphql } from "@/src/gql";
import { graphqlClient } from "@/src/graphql-client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDistance, formatISO } from "date-fns";
import { Fragment } from "react";
import { CommentForm } from "./CommentForm";

const query = graphql(`
  query PostWithComments($id: ID!) {
    post(id: $id) {
      id
      body
      createdAt
      commentCount
    }
    comments(postId: $id) {
      edges {
        node {
          id
          body
          createdAt
        }
      }
    }
  }
`);

const fetchPostWithComments = async (id: string) => {
  const result = await graphqlClient.request(query, { id });

  const post = result.post;
  const comments = result.comments.edges
    .flatMap((edge) => edge.node)
    .filter(notNull);
  return { post, comments };
};

function notNull<T>(value?: T | null): value is T {
  return value != null;
}

type Props = {
  id:string
};
export  async function Post({ id }: Props) {
  const { post, comments } = await fetchPostWithComments(id);
  if (!post) {
    return <div>not found</div>;
  }
  return (
    <Stack spacing={4} direction="column">
      {/* post */}
      <Card>
        <CardBody>
          <Text>{post.body}</Text>
        </CardBody>
        <CardFooter>
          <Stack spacing={2} direction="row">
            <Text>{formatISO(new Date(post.createdAt))}</Text>
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
              <Text>
                {formatDistance(new Date(comment.createdAt), new Date())} ago
              </Text>
            </Box>
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
}
