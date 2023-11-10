/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Comment } from "./comment/resolvers/Comment";
import { CommentConnection } from "./comment/resolvers/CommentConnection";
import { CommentEdge } from "./comment/resolvers/CommentEdge";
import { CreateCommentPayload } from "./comment/resolvers/CreateCommentPayload";
import { CreatePostPayload } from "./post/resolvers/CreatePostPayload";
import { createComment as Mutation_createComment } from "./comment/resolvers/Mutation/createComment";
import { createPost as Mutation_createPost } from "./post/resolvers/Mutation/createPost";
import { PageInfo } from "./base/resolvers/PageInfo";
import { Post } from "./post/resolvers/Post";
import { PostConnection } from "./post/resolvers/PostConnection";
import { PostEdge } from "./post/resolvers/PostEdge";
import { comments as Query_comments } from "./comment/resolvers/Query/comments";
import { post as Query_post } from "./post/resolvers/Query/post";
import { posts as Query_posts } from "./post/resolvers/Query/posts";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: { comments: Query_comments, post: Query_post, posts: Query_posts },
  Mutation: {
    createComment: Mutation_createComment,
    createPost: Mutation_createPost,
  },

  Comment: Comment,
  CommentConnection: CommentConnection,
  CommentEdge: CommentEdge,
  CreateCommentPayload: CreateCommentPayload,
  CreatePostPayload: CreatePostPayload,
  PageInfo: PageInfo,
  Post: Post,
  PostConnection: PostConnection,
  PostEdge: PostEdge,
  DateTime: DateTimeResolver,
};
