import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { CommentConnectionMapper } from "./comment/schema.mappers";
import { PostMapper, PostConnectionMapper } from "./post/schema.mappers";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: Date | string; output: Date | string };
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type CommentConnection = {
  __typename?: "CommentConnection";
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type CreateCommentInput = {
  body: Scalars["String"]["input"];
  postId: Scalars["ID"]["input"];
};

export type CreateCommentPayload = {
  __typename?: "CreateCommentPayload";
  comment: Comment;
};

export type CreatePostInput = {
  body: Scalars["String"]["input"];
};

export type CreatePostPayload = {
  __typename?: "CreatePostPayload";
  post: Post;
};

export type Mutation = {
  __typename?: "Mutation";
  createComment: CreateCommentPayload;
  createPost: CreatePostPayload;
};

export type MutationcreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationcreatePostArgs = {
  input: CreatePostInput;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
};

export type Post = {
  __typename?: "Post";
  body: Scalars["String"]["output"];
  comments: CommentConnection;
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type PostcommentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostConnection = {
  __typename?: "PostConnection";
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type PostEdge = {
  __typename?: "PostEdge";
  cursor: Scalars["String"]["output"];
  node: Post;
};

export type Query = {
  __typename?: "Query";
  post?: Maybe<Post>;
  posts: PostConnection;
};

export type QuerypostArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerypostsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  CommentConnection: ResolverTypeWrapper<CommentConnectionMapper>;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  CreateCommentInput: CreateCommentInput;
  CreateCommentPayload: ResolverTypeWrapper<CreateCommentPayload>;
  CreatePostInput: CreatePostInput;
  CreatePostPayload: ResolverTypeWrapper<
    Omit<CreatePostPayload, "post"> & { post: ResolversTypes["Post"] }
  >;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Post: ResolverTypeWrapper<PostMapper>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  PostConnection: ResolverTypeWrapper<PostConnectionMapper>;
  PostEdge: ResolverTypeWrapper<
    Omit<PostEdge, "node"> & { node: ResolversTypes["Post"] }
  >;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  String: Scalars["String"]["output"];
  ID: Scalars["ID"]["output"];
  CommentConnection: CommentConnectionMapper;
  CommentEdge: CommentEdge;
  CreateCommentInput: CreateCommentInput;
  CreateCommentPayload: CreateCommentPayload;
  CreatePostInput: CreatePostInput;
  CreatePostPayload: Omit<CreatePostPayload, "post"> & {
    post: ResolversParentTypes["Post"];
  };
  Date: Scalars["Date"]["output"];
  Mutation: {};
  PageInfo: PageInfo;
  Boolean: Scalars["Boolean"]["output"];
  Post: PostMapper;
  Int: Scalars["Int"]["output"];
  PostConnection: PostConnectionMapper;
  PostEdge: Omit<PostEdge, "node"> & { node: ResolversParentTypes["Post"] };
  Query: {};
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"],
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CommentConnection"] = ResolversParentTypes["CommentConnection"],
> = {
  edges?: Resolver<
    Array<ResolversTypes["CommentEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CommentEdge"] = ResolversParentTypes["CommentEdge"],
> = {
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Comment"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentPayloadResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateCommentPayload"] = ResolversParentTypes["CreateCommentPayload"],
> = {
  comment?: Resolver<ResolversTypes["Comment"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostPayloadResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreatePostPayload"] = ResolversParentTypes["CreatePostPayload"],
> = {
  post?: Resolver<ResolversTypes["Post"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createComment?: Resolver<
    ResolversTypes["CreateCommentPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateCommentArgs, "input">
  >;
  createPost?: Resolver<
    ResolversTypes["CreatePostPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationcreatePostArgs, "input">
  >;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"],
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Post"] = ResolversParentTypes["Post"],
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  comments?: Resolver<
    ResolversTypes["CommentConnection"],
    ParentType,
    ContextType,
    Partial<PostcommentsArgs>
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PostConnection"] = ResolversParentTypes["PostConnection"],
> = {
  edges?: Resolver<Array<ResolversTypes["PostEdge"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PostEdge"] = ResolversParentTypes["PostEdge"],
> = {
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Post"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  post?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypostArgs, "id">
  >;
  posts?: Resolver<
    ResolversTypes["PostConnection"],
    ParentType,
    ContextType,
    Partial<QuerypostsArgs>
  >;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentConnection?: CommentConnectionResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  CreateCommentPayload?: CreateCommentPayloadResolvers<ContextType>;
  CreatePostPayload?: CreatePostPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostConnection?: PostConnectionResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
