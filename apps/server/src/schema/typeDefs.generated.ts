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
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 114, end: 119 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 124, end: 132 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "postId",
                loc: { start: 133, end: 139 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 141, end: 143 },
                  },
                  loc: { start: 141, end: 143 },
                },
                loc: { start: 141, end: 144 },
              },
              directives: [],
              loc: { start: 133, end: 144 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 146, end: 151 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 153, end: 159 },
                },
                loc: { start: 153, end: 159 },
              },
              directives: [],
              loc: { start: 146, end: 159 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 161, end: 166 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 168, end: 171 },
                },
                loc: { start: 168, end: 171 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "32",
                loc: { start: 174, end: 176 },
              },
              directives: [],
              loc: { start: 161, end: 176 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CommentConnection",
                loc: { start: 179, end: 196 },
              },
              loc: { start: 179, end: 196 },
            },
            loc: { start: 179, end: 197 },
          },
          directives: [],
          loc: { start: 124, end: 197 },
        },
      ],
      loc: { start: 102, end: 199 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 206, end: 213 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 218, end: 220 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 222, end: 224 },
              },
              loc: { start: 222, end: 224 },
            },
            loc: { start: 222, end: 225 },
          },
          directives: [],
          loc: { start: 218, end: 225 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 228, end: 232 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 234, end: 240 },
              },
              loc: { start: 234, end: 240 },
            },
            loc: { start: 234, end: 241 },
          },
          directives: [],
          loc: { start: 228, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 244, end: 253 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 255, end: 259 },
              },
              loc: { start: 255, end: 259 },
            },
            loc: { start: 255, end: 260 },
          },
          directives: [],
          loc: { start: 244, end: 260 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 263, end: 272 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 274, end: 278 },
              },
              loc: { start: 274, end: 278 },
            },
            loc: { start: 274, end: 279 },
          },
          directives: [],
          loc: { start: 263, end: 279 },
        },
      ],
      loc: { start: 201, end: 281 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentConnection",
        loc: { start: 288, end: 305 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 310, end: 315 } },
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
                    loc: { start: 318, end: 329 },
                  },
                  loc: { start: 318, end: 329 },
                },
                loc: { start: 318, end: 330 },
              },
              loc: { start: 317, end: 331 },
            },
            loc: { start: 317, end: 332 },
          },
          directives: [],
          loc: { start: 310, end: 332 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 335, end: 343 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 345, end: 353 },
              },
              loc: { start: 345, end: 353 },
            },
            loc: { start: 345, end: 354 },
          },
          directives: [],
          loc: { start: 335, end: 354 },
        },
      ],
      loc: { start: 283, end: 356 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentEdge",
        loc: { start: 363, end: 374 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 379, end: 383 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 385, end: 392 },
              },
              loc: { start: 385, end: 392 },
            },
            loc: { start: 385, end: 393 },
          },
          directives: [],
          loc: { start: 379, end: 393 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 396, end: 402 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 404, end: 410 },
              },
              loc: { start: 404, end: 410 },
            },
            loc: { start: 404, end: 411 },
          },
          directives: [],
          loc: { start: 396, end: 411 },
        },
      ],
      loc: { start: 358, end: 413 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 427, end: 435 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createComment",
            loc: { start: 440, end: 453 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 454, end: 459 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreateCommentInput",
                    loc: { start: 461, end: 479 },
                  },
                  loc: { start: 461, end: 479 },
                },
                loc: { start: 461, end: 480 },
              },
              directives: [],
              loc: { start: 454, end: 480 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreateCommentPayload",
                loc: { start: 483, end: 503 },
              },
              loc: { start: 483, end: 503 },
            },
            loc: { start: 483, end: 504 },
          },
          directives: [],
          loc: { start: 440, end: 504 },
        },
      ],
      loc: { start: 415, end: 506 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentInput",
        loc: { start: 514, end: 532 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 537, end: 543 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 545, end: 547 },
              },
              loc: { start: 545, end: 547 },
            },
            loc: { start: 545, end: 548 },
          },
          directives: [],
          loc: { start: 537, end: 548 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "body", loc: { start: 551, end: 555 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 557, end: 563 },
              },
              loc: { start: 557, end: 563 },
            },
            loc: { start: 557, end: 564 },
          },
          directives: [],
          loc: { start: 551, end: 564 },
        },
      ],
      loc: { start: 508, end: 566 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentPayload",
        loc: { start: 573, end: 593 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 598, end: 605 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Comment",
              loc: { start: 607, end: 614 },
            },
            loc: { start: 607, end: 614 },
          },
          directives: [],
          loc: { start: 598, end: 614 },
        },
      ],
      loc: { start: 568, end: 616 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 629, end: 634 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 639, end: 644 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 645, end: 650 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 652, end: 658 },
                },
                loc: { start: 652, end: 658 },
              },
              directives: [],
              loc: { start: 645, end: 658 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 660, end: 665 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 667, end: 670 },
                },
                loc: { start: 667, end: 670 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "32",
                loc: { start: 673, end: 675 },
              },
              directives: [],
              loc: { start: 660, end: 675 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PostConnection",
                loc: { start: 678, end: 692 },
              },
              loc: { start: 678, end: 692 },
            },
            loc: { start: 678, end: 693 },
          },
          directives: [],
          loc: { start: 639, end: 693 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 696, end: 700 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 701, end: 703 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 705, end: 707 },
                  },
                  loc: { start: 705, end: 707 },
                },
                loc: { start: 705, end: 708 },
              },
              directives: [],
              loc: { start: 701, end: 708 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 711, end: 715 },
            },
            loc: { start: 711, end: 715 },
          },
          directives: [],
          loc: { start: 696, end: 715 },
        },
      ],
      loc: { start: 617, end: 717 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 724, end: 728 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 733, end: 735 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 737, end: 739 },
              },
              loc: { start: 737, end: 739 },
            },
            loc: { start: 737, end: 740 },
          },
          directives: [],
          loc: { start: 733, end: 740 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 743, end: 747 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 749, end: 755 },
              },
              loc: { start: 749, end: 755 },
            },
            loc: { start: 749, end: 756 },
          },
          directives: [],
          loc: { start: 743, end: 756 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 759, end: 768 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 770, end: 774 },
              },
              loc: { start: 770, end: 774 },
            },
            loc: { start: 770, end: 775 },
          },
          directives: [],
          loc: { start: 759, end: 775 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 778, end: 787 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 789, end: 793 },
              },
              loc: { start: 789, end: 793 },
            },
            loc: { start: 789, end: 794 },
          },
          directives: [],
          loc: { start: 778, end: 794 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "commentCount",
            loc: { start: 797, end: 809 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 811, end: 814 },
              },
              loc: { start: 811, end: 814 },
            },
            loc: { start: 811, end: 815 },
          },
          directives: [],
          loc: { start: 797, end: 815 },
        },
      ],
      loc: { start: 719, end: 817 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostConnection",
        loc: { start: 824, end: 838 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 843, end: 848 } },
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
                    loc: { start: 851, end: 859 },
                  },
                  loc: { start: 851, end: 859 },
                },
                loc: { start: 851, end: 860 },
              },
              loc: { start: 850, end: 861 },
            },
            loc: { start: 850, end: 862 },
          },
          directives: [],
          loc: { start: 843, end: 862 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 865, end: 873 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 875, end: 883 },
              },
              loc: { start: 875, end: 883 },
            },
            loc: { start: 875, end: 884 },
          },
          directives: [],
          loc: { start: 865, end: 884 },
        },
      ],
      loc: { start: 819, end: 886 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PostEdge", loc: { start: 893, end: 901 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 906, end: 912 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 914, end: 920 },
              },
              loc: { start: 914, end: 920 },
            },
            loc: { start: 914, end: 921 },
          },
          directives: [],
          loc: { start: 906, end: 921 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 924, end: 928 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 930, end: 934 },
              },
              loc: { start: 930, end: 934 },
            },
            loc: { start: 930, end: 935 },
          },
          directives: [],
          loc: { start: 924, end: 935 },
        },
      ],
      loc: { start: 888, end: 937 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 951, end: 959 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 964, end: 974 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 975, end: 980 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreatePostInput",
                    loc: { start: 982, end: 997 },
                  },
                  loc: { start: 982, end: 997 },
                },
                loc: { start: 982, end: 998 },
              },
              directives: [],
              loc: { start: 975, end: 998 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreatePostPayload",
                loc: { start: 1001, end: 1018 },
              },
              loc: { start: 1001, end: 1018 },
            },
            loc: { start: 1001, end: 1019 },
          },
          directives: [],
          loc: { start: 964, end: 1019 },
        },
      ],
      loc: { start: 939, end: 1021 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostInput",
        loc: { start: 1029, end: 1044 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "body",
            loc: { start: 1049, end: 1053 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1055, end: 1061 },
              },
              loc: { start: 1055, end: 1061 },
            },
            loc: { start: 1055, end: 1062 },
          },
          directives: [],
          loc: { start: 1049, end: 1062 },
        },
      ],
      loc: { start: 1023, end: 1064 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostPayload",
        loc: { start: 1071, end: 1088 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "post",
            loc: { start: 1093, end: 1097 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 1099, end: 1103 },
            },
            loc: { start: 1099, end: 1103 },
          },
          directives: [],
          loc: { start: 1093, end: 1103 },
        },
      ],
      loc: { start: 1066, end: 1105 },
    },
  ],
  loc: { start: 0, end: 1106 },
} as unknown as DocumentNode;
