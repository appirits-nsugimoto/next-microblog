import {
  Card,
  CardBody,
  CardFooter,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import NextLink from "next/link";

type Post = {
  id: number;
  body: string;
  createdAt: Date;
  commentCount: number;
};
type Props = {
  post: Post;
};

export const Post = ({ post }: Props) => {
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
            <Text>{formatDistanceToNow(post.createdAt)} ago</Text>
            <Text>
              <span title="コメント数">💬</span> {post.commentCount}
            </Text>
          </Stack>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};
