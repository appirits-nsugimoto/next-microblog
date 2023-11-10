import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 7, end: 15 } },
      directives: [],
      loc: { start: 0, end: 15 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 22, end: 27 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 17, end: 27 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 34, end: 42 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 29, end: 42 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PageInfo", loc: { start: 49, end: 57 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hasNextPage",
            loc: { start: 62, end: 73 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 75, end: 82 },
              },
              loc: { start: 75, end: 82 },
            },
            loc: { start: 75, end: 83 },
          },
          directives: [],
          loc: { start: 62, end: 83 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endCursor",
            loc: { start: 86, end: 95 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 97, end: 103 },
            },
            loc: { start: 97, end: 103 },
          },
          directives: [],
          loc: { start: 86, end: 103 },
        },
      ],
      loc: { start: 44, end: 105 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 118, end: 123 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comments",
            loc: { start: 128, end: 136 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "postId",
                loc: { start: 137, end: 143 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 145, end: 147 },
                  },
                  loc: { start: 145, end: 147 },
                },
                loc: { start: 145, end: 148 },
              },
              directives: [],
              loc: { start: 137, end: 148 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 150, end: 155 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 157, end: 163 },
                },
                loc: { start: 157, end: 163 },
              },
              directives: [],
              loc: { start: 150, end: 163 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 165, end: 170 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 172, end: 175 },
                },
                loc: { start: 172, end: 175 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "32",
                loc: { start: 178, end: 180 },
              },
              directives: [],
              loc: { start: 165, end: 180 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CommentConnection",
                loc: { start: 183, end: 200 },
              },
              loc: { start: 183, end: 200 },
            },
            loc: { start: 183, end: 201 },
          },
          directives: [],
          loc: { start: 128, end: 201 },
        },
      ],
      loc: { start: 106, end: 203 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Comment", loc: { start: 210, end: 217 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 222, end: 224 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 226, end: 228 },
              },
              loc: { start: 226, end: 228 },
            },
            loc: { start: 226, end: 229 },
          },
          directives: [],
          loc: { start: 222, end: 229 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 232, end: 236 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 238, end: 244 },
              },
              loc: { start: 238, end: 244 },
            },
            loc: { start: 238, end: 245 },
          },
          directives: [],
          loc: { start: 232, end: 245 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 248, end: 257 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 259, end: 267 },
              },
              loc: { start: 259, end: 267 },
            },
            loc: { start: 259, end: 268 },
          },
          directives: [],
          loc: { start: 248, end: 268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 271, end: 280 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 282, end: 290 },
              },
              loc: { start: 282, end: 290 },
            },
            loc: { start: 282, end: 291 },
          },
          directives: [],
          loc: { start: 271, end: 291 },
        },
      ],
      loc: { start: 205, end: 293 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentConnection",
        loc: { start: 300, end: 317 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 322, end: 327 } },
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
                    loc: { start: 330, end: 341 },
                  },
                  loc: { start: 330, end: 341 },
                },
                loc: { start: 330, end: 342 },
              },
              loc: { start: 329, end: 343 },
            },
            loc: { start: 329, end: 344 },
          },
          directives: [],
          loc: { start: 322, end: 344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 347, end: 355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 357, end: 365 },
              },
              loc: { start: 357, end: 365 },
            },
            loc: { start: 357, end: 366 },
          },
          directives: [],
          loc: { start: 347, end: 366 },
        },
      ],
      loc: { start: 295, end: 368 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CommentEdge",
        loc: { start: 375, end: 386 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 391, end: 395 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Comment",
                loc: { start: 397, end: 404 },
              },
              loc: { start: 397, end: 404 },
            },
            loc: { start: 397, end: 405 },
          },
          directives: [],
          loc: { start: 391, end: 405 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 408, end: 414 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 416, end: 422 },
              },
              loc: { start: 416, end: 422 },
            },
            loc: { start: 416, end: 423 },
          },
          directives: [],
          loc: { start: 408, end: 423 },
        },
      ],
      loc: { start: 370, end: 425 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 439, end: 447 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createComment",
            loc: { start: 452, end: 465 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 466, end: 471 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreateCommentInput",
                    loc: { start: 473, end: 491 },
                  },
                  loc: { start: 473, end: 491 },
                },
                loc: { start: 473, end: 492 },
              },
              directives: [],
              loc: { start: 466, end: 492 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreateCommentPayload",
                loc: { start: 495, end: 515 },
              },
              loc: { start: 495, end: 515 },
            },
            loc: { start: 495, end: 516 },
          },
          directives: [],
          loc: { start: 452, end: 516 },
        },
      ],
      loc: { start: 427, end: 518 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentInput",
        loc: { start: 526, end: 544 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "postId",
            loc: { start: 549, end: 555 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 557, end: 559 },
              },
              loc: { start: 557, end: 559 },
            },
            loc: { start: 557, end: 560 },
          },
          directives: [],
          loc: { start: 549, end: 560 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "body", loc: { start: 563, end: 567 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 569, end: 575 },
              },
              loc: { start: 569, end: 575 },
            },
            loc: { start: 569, end: 576 },
          },
          directives: [],
          loc: { start: 563, end: 576 },
        },
      ],
      loc: { start: 520, end: 578 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreateCommentPayload",
        loc: { start: 585, end: 605 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "comment",
            loc: { start: 610, end: 617 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Comment",
              loc: { start: 619, end: 626 },
            },
            loc: { start: 619, end: 626 },
          },
          directives: [],
          loc: { start: 610, end: 626 },
        },
      ],
      loc: { start: 580, end: 628 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 641, end: 646 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "posts", loc: { start: 651, end: 656 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "after",
                loc: { start: 657, end: 662 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 664, end: 670 },
                },
                loc: { start: 664, end: 670 },
              },
              directives: [],
              loc: { start: 657, end: 670 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 672, end: 677 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 679, end: 682 },
                },
                loc: { start: 679, end: 682 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "32",
                loc: { start: 685, end: 687 },
              },
              directives: [],
              loc: { start: 672, end: 687 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PostConnection",
                loc: { start: 690, end: 704 },
              },
              loc: { start: 690, end: 704 },
            },
            loc: { start: 690, end: 705 },
          },
          directives: [],
          loc: { start: 651, end: 705 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "post", loc: { start: 708, end: 712 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 713, end: 715 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 717, end: 719 },
                  },
                  loc: { start: 717, end: 719 },
                },
                loc: { start: 717, end: 720 },
              },
              directives: [],
              loc: { start: 713, end: 720 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 723, end: 727 },
            },
            loc: { start: 723, end: 727 },
          },
          directives: [],
          loc: { start: 708, end: 727 },
        },
      ],
      loc: { start: 629, end: 729 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Post", loc: { start: 736, end: 740 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 745, end: 747 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 749, end: 751 },
              },
              loc: { start: 749, end: 751 },
            },
            loc: { start: 749, end: 752 },
          },
          directives: [],
          loc: { start: 745, end: 752 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 755, end: 759 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 761, end: 767 },
              },
              loc: { start: 761, end: 767 },
            },
            loc: { start: 761, end: 768 },
          },
          directives: [],
          loc: { start: 755, end: 768 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 771, end: 780 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 782, end: 790 },
              },
              loc: { start: 782, end: 790 },
            },
            loc: { start: 782, end: 791 },
          },
          directives: [],
          loc: { start: 771, end: 791 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 794, end: 803 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 805, end: 813 },
              },
              loc: { start: 805, end: 813 },
            },
            loc: { start: 805, end: 814 },
          },
          directives: [],
          loc: { start: 794, end: 814 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "commentCount",
            loc: { start: 817, end: 829 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 831, end: 834 },
              },
              loc: { start: 831, end: 834 },
            },
            loc: { start: 831, end: 835 },
          },
          directives: [],
          loc: { start: 817, end: 835 },
        },
      ],
      loc: { start: 731, end: 837 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PostConnection",
        loc: { start: 844, end: 858 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "edges", loc: { start: 863, end: 868 } },
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
                    loc: { start: 871, end: 879 },
                  },
                  loc: { start: 871, end: 879 },
                },
                loc: { start: 871, end: 880 },
              },
              loc: { start: 870, end: 881 },
            },
            loc: { start: 870, end: 882 },
          },
          directives: [],
          loc: { start: 863, end: 882 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pageInfo",
            loc: { start: 885, end: 893 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PageInfo",
                loc: { start: 895, end: 903 },
              },
              loc: { start: 895, end: 903 },
            },
            loc: { start: 895, end: 904 },
          },
          directives: [],
          loc: { start: 885, end: 904 },
        },
      ],
      loc: { start: 839, end: 906 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PostEdge", loc: { start: 913, end: 921 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cursor",
            loc: { start: 926, end: 932 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 934, end: 940 },
              },
              loc: { start: 934, end: 940 },
            },
            loc: { start: 934, end: 941 },
          },
          directives: [],
          loc: { start: 926, end: 941 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "node", loc: { start: 944, end: 948 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Post",
                loc: { start: 950, end: 954 },
              },
              loc: { start: 950, end: 954 },
            },
            loc: { start: 950, end: 955 },
          },
          directives: [],
          loc: { start: 944, end: 955 },
        },
      ],
      loc: { start: 908, end: 957 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 971, end: 979 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPost",
            loc: { start: 984, end: 994 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 995, end: 1000 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreatePostInput",
                    loc: { start: 1002, end: 1017 },
                  },
                  loc: { start: 1002, end: 1017 },
                },
                loc: { start: 1002, end: 1018 },
              },
              directives: [],
              loc: { start: 995, end: 1018 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreatePostPayload",
                loc: { start: 1021, end: 1038 },
              },
              loc: { start: 1021, end: 1038 },
            },
            loc: { start: 1021, end: 1039 },
          },
          directives: [],
          loc: { start: 984, end: 1039 },
        },
      ],
      loc: { start: 959, end: 1041 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostInput",
        loc: { start: 1049, end: 1064 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "body",
            loc: { start: 1069, end: 1073 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1075, end: 1081 },
              },
              loc: { start: 1075, end: 1081 },
            },
            loc: { start: 1075, end: 1082 },
          },
          directives: [],
          loc: { start: 1069, end: 1082 },
        },
      ],
      loc: { start: 1043, end: 1084 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreatePostPayload",
        loc: { start: 1091, end: 1108 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "post",
            loc: { start: 1113, end: 1117 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Post",
              loc: { start: 1119, end: 1123 },
            },
            loc: { start: 1119, end: 1123 },
          },
          directives: [],
          loc: { start: 1113, end: 1123 },
        },
      ],
      loc: { start: 1086, end: 1125 },
    },
  ],
  loc: { start: 0, end: 1126 },
} as unknown as DocumentNode;
