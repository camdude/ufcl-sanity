import { H1, H2, H3, H4, H5, H6 } from "./pageStyles";

export default {
  name: "page-old",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Description",
          type: "text",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            {
              title: "H1",
              value: "h1",
              blockEditor: {
                render: H1,
              },
            },
            {
              title: "H2",
              value: "h2",
              blockEditor: {
                render: H2,
              },
            },
            {
              title: "H3",
              value: "h3",
              blockEditor: {
                render: H3,
              },
            },
            {
              title: "H4",
              value: "h4",
              blockEditor: {
                render: H4,
              },
            },
            {
              title: "H5",
              value: "h5",
              blockEditor: {
                render: H5,
              },
            },
            {
              title: "H6",
              value: "h6",
              blockEditor: {
                render: H6,
              },
            },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => {
        return Rule.required();
      },
    },
  ],
};
