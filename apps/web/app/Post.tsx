import {
  Card,
  CardBody,
  CardFooter,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import NextLink from "next/link";
import { FragmentType, graphql, useFragment } from "@/src/gql";

const PostFragment = graphql(`
  fragment PostListItem on Post {
    id
    body
    createdAt
    commentCount
  }
`);

type Props = {
  post: FragmentType<typeof PostFragment>;
};

export const Post = ({ post: fragment }: Props) => {
  const post = useFragment(PostFragment, fragment);
  return (
    <LinkBox>
      <Card>
        <CardBody>
          <LinkOverlay as={NextLink} href={`/posts/${post.id}`}>
            <Text>{post.body}</Text>
          </LinkOverlay>
        </CardBody>
        <CardFooter>
          <Stack spacing={2} direction="row">
            <Text>{formatDistanceToNow(new Date(post.createdAt))} ago</Text>
            <Text>
              <span title="コメント数">💬</span> {post.commentCount}
            </Text>
          </Stack>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};
