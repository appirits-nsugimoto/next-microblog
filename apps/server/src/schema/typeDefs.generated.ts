import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Date", loc: { start: 7, end: 11 } },
      directives: [],
      loc: { start: 0, end: 11 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 18, end: 23 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 13, end: 23 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 30, end: 38 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 25, end: 38 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PageInfo", loc: { start: 45, end: 53 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hasNextPage",
            loc: { start: 58, end: 69 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 71, end: 78 },
              },
              loc: { start: 71, end: 78 },
            },
            loc: { start: 71, end: 79 },
          },
          directives: [],
          loc: { start: 58, end: 79 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endCursor",
            loc: { start: 82, end: 91 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 93, end: 99 },
            },
            loc: { start: 93, end: 99 },
          },
          directives: [],
          loc: { start: 82, end: 99 },
        },
      ],
      loc: { start: 40, end: 101 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 107, end: 114 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 119, end: 121 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 123, end: 125 },
              },
              loc: { start: 123, end: 125 },
            },
            loc: { start: 123, end: 126 },
          },
          directives: [],
          loc: { start: 119, end: 126 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 129, end: 133 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 135, end: 141 },
              },
              loc: { start: 135, end: 141 },
            },
            loc: { start: 135, end: 142 },
          },
          directives: [],
          loc: { start: 129, end: 142 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 145, end: 154 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 156, end: 160 },
              },
              loc: { start: 156, end: 160 },
            },
            loc: { start: 156, end: 161 },
          },
          directives: [],
          loc: { start: 145, end: 161 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 164, end: 173 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 175, end: 179 },
              },
              loc: { start: 175, end: 179 },
            },
            loc: { start: 175, end: 180 },
          },
          directives: [],
          loc: { start: 164, end: 180 },
        },
      ],
      loc: { start: 102, end: 182 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentConnection",
        loc: { start: 189, end: 206 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 211, end: 216 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CommentEdge",
                    loc: { start: 219, end: 230 },
                  },
                  loc: { start: 219, end: 230 },
                },
                loc: { start: 219, end: 231 },
              },
              loc: { start: 218, end: 232 },
            },
            loc: { start: 218, end: 233 },
          },
          directives: [],
          loc: { start: 211, end: 233 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 236, end: 244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 246, end: 254 },
              },
              loc: { start: 246, end: 254 },
            },
            loc: { start: 246, end: 255 },
          },
          directives: [],
          loc: { start: 236, end: 255 },
        },
      ],
      loc: { start: 184, end: 257 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentEdge",
        loc: { start: 264, end: 275 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 280, end: 284 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 286, end: 293 },
              },
              loc: { start: 286, end: 293 },
            },
            loc: { start: 286, end: 294 },
          },
          directives: [],
          loc: { start: 280, end: 294 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 297, end: 303 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 305, end: 311 },
              },
              loc: { start: 305, end: 311 },
            },
            loc: { start: 305, end: 312 },
          },
          directives: [],
          loc: { start: 297, end: 312 },
        },
      ],
      loc: { start: 259, end: 314 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 328, end: 336 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createComment",
            loc: { start: 341, end: 354 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 355, end: 360 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreateCommentInput",
                    loc: { start: 362, end: 380 },
                  },
                  loc: { start: 362, end: 380 },
                },
                loc: { start: 362, end: 381 },
              },
              directives: [],
              loc: { start: 355, end: 381 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreateCommentPayload",
                loc: { start: 384, end: 404 },
              },
              loc: { start: 384, end: 404 },
            },
            loc: { start: 384, end: 405 },
          },
          directives: [],
          loc: { start: 341, end: 405 },
        },
      ],
      loc: { start: 316, end: 407 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentInput",
        loc: { start: 415, end: 433 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 438, end: 444 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 446, end: 448 },
              },
              loc: { start: 446, end: 448 },
            },
            loc: { start: 446, end: 449 },
          },
          directives: [],
          loc: { start: 438, end: 449 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "body", loc: { start: 452, end: 456 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 458, end: 464 },
              },
              loc: { start: 458, end: 464 },
            },
            loc: { start: 458, end: 465 },
          },
          directives: [],
          loc: { start: 452, end: 465 },
        },
      ],
      loc: { start: 409, end: 467 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentPayload",
        loc: { start: 474, end: 494 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 499, end: 506 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 508, end: 515 },
              },
              loc: { start: 508, end: 515 },
            },
            loc: { start: 508, end: 516 },
          },
          directives: [],
          loc: { start: 499, end: 516 },
        },
      ],
      loc: { start: 469, end: 518 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 531, end: 536 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 541, end: 546 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 547, end: 552 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 554, end: 560 },
                },
                loc: { start: 554, end: 560 },
              },
              directives: [],
              loc: { start: 547, end: 560 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 562, end: 567 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 569, end: 572 },
                },
                loc: { start: 569, end: 572 },
              },
              directives: [],
              loc: { start: 562, end: 572 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PostConnection",
                loc: { start: 575, end: 589 },
              },
              loc: { start: 575, end: 589 },
            },
            loc: { start: 575, end: 590 },
          },
          directives: [],
          loc: { start: 541, end: 590 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 593, end: 597 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 598, end: 600 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 602, end: 604 },
                  },
                  loc: { start: 602, end: 604 },
                },
                loc: { start: 602, end: 605 },
              },
              directives: [],
              loc: { start: 598, end: 605 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 608, end: 612 },
            },
            loc: { start: 608, end: 612 },
          },
          directives: [],
          loc: { start: 593, end: 612 },
        },
      ],
      loc: { start: 519, end: 614 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 621, end: 625 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 630, end: 632 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 634, end: 636 },
              },
              loc: { start: 634, end: 636 },
            },
            loc: { start: 634, end: 637 },
          },
          directives: [],
          loc: { start: 630, end: 637 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 640, end: 644 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 646, end: 652 },
              },
              loc: { start: 646, end: 652 },
            },
            loc: { start: 646, end: 653 },
          },
          directives: [],
          loc: { start: 640, end: 653 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 656, end: 665 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 667, end: 671 },
              },
              loc: { start: 667, end: 671 },
            },
            loc: { start: 667, end: 672 },
          },
          directives: [],
          loc: { start: 656, end: 672 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 675, end: 684 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 686, end: 690 },
              },
              loc: { start: 686, end: 690 },
            },
            loc: { start: 686, end: 691 },
          },
          directives: [],
          loc: { start: 675, end: 691 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 694, end: 702 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 703, end: 708 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 710, end: 716 },
                },
                loc: { start: 710, end: 716 },
              },
              directives: [],
              loc: { start: 703, end: 716 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 718, end: 723 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 725, end: 728 },
                },
                loc: { start: 725, end: 728 },
              },
              directives: [],
              loc: { start: 718, end: 728 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CommentConnection",
                loc: { start: 731, end: 748 },
              },
              loc: { start: 731, end: 748 },
            },
            loc: { start: 731, end: 749 },
          },
          directives: [],
          loc: { start: 694, end: 749 },
        },
      ],
      loc: { start: 616, end: 751 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostConnection",
        loc: { start: 758, end: 772 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 777, end: 782 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PostEdge",
                    loc: { start: 785, end: 793 },
                  },
                  loc: { start: 785, end: 793 },
                },
                loc: { start: 785, end: 794 },
              },
              loc: { start: 784, end: 795 },
            },
            loc: { start: 784, end: 796 },
          },
          directives: [],
          loc: { start: 777, end: 796 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 799, end: 807 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 809, end: 817 },
              },
              loc: { start: 809, end: 817 },
            },
            loc: { start: 809, end: 818 },
          },
          directives: [],
          loc: { start: 799, end: 818 },
        },
      ],
      loc: { start: 753, end: 820 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PostEdge", loc: { start: 827, end: 835 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 840, end: 846 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 848, end: 854 },
              },
              loc: { start: 848, end: 854 },
            },
            loc: { start: 848, end: 855 },
          },
          directives: [],
          loc: { start: 840, end: 855 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 858, end: 862 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 864, end: 868 },
              },
              loc: { start: 864, end: 868 },
            },
            loc: { start: 864, end: 869 },
          },
          directives: [],
          loc: { start: 858, end: 869 },
        },
      ],
      loc: { start: 822, end: 871 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 885, end: 893 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 898, end: 908 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 909, end: 914 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreatePostInput",
                    loc: { start: 916, end: 931 },
                  },
                  loc: { start: 916, end: 931 },
                },
                loc: { start: 916, end: 932 },
              },
              directives: [],
              loc: { start: 909, end: 932 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreatePostPayload",
                loc: { start: 935, end: 952 },
              },
              loc: { start: 935, end: 952 },
            },
            loc: { start: 935, end: 953 },
          },
          directives: [],
          loc: { start: 898, end: 953 },
        },
      ],
      loc: { start: 873, end: 955 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostInput",
        loc: { start: 963, end: 978 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "body", loc: { start: 983, end: 987 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 989, end: 995 },
              },
              loc: { start: 989, end: 995 },
            },
            loc: { start: 989, end: 996 },
          },
          directives: [],
          loc: { start: 983, end: 996 },
        },
      ],
      loc: { start: 957, end: 998 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostPayload",
        loc: { start: 1005, end: 1022 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "post",
            loc: { start: 1027, end: 1031 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 1033, end: 1037 },
              },
              loc: { start: 1033, end: 1037 },
            },
            loc: { start: 1033, end: 1038 },
          },
          directives: [],
          loc: { start: 1027, end: 1038 },
        },
      ],
      loc: { start: 1000, end: 1040 },
    },
  ],
  loc: { start: 0, end: 1041 },
} as unknown as DocumentNode;
