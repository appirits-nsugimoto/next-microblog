export type PostMapper = {
  id: number;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PostConnectionMapper = {
  posts: PostMapper[];
  hasNextPage: boolean;
};
