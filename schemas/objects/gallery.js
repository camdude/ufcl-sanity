export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "imageCard",
          type: "object",
          title: "Image Card",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "link", type: "url", title: "link" },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
